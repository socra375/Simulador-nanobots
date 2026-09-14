import { s } from "./constants";
import { concatParts, rotateAxisYtoX, sampleBoxSurface, sampleCylinderSurface, samplePolyline, sampleSphereSurface, sampleTaperedCylinderSurface, scaleAxis, splitCounts, translate } from "./sampling";

export function carro(count: number): Float32Array {
  const chassisHx = s * 0.62;
  const chassisHy = s * 0.14;
  const chassisHz = s * 0.42;

  const hoodHalfLen = chassisHx * 0.5;
  const hoodBackR = s * 0.3;
  const hoodFrontR = s * 0.14;
  const hoodFlatten = 0.35;

  const roofHx = s * 0.34;
  const roofHy = s * 0.16;
  const roofHz = s * 0.32;

  const trunkHx = s * 0.16;
  const trunkHy = s * 0.1;
  const trunkHz = s * 0.36;

  const bumperHx = s * 0.05;
  const bumperHy = s * 0.08;
  const bumperHz = s * 0.4;

  const wingHx = s * 0.05;
  const wingHy = s * 0.018;
  const wingHz = s * 0.34;
  const strutR = s * 0.018;
  const strutHalfH = s * 0.1;

  const mirrorHx = s * 0.045;
  const mirrorHy = s * 0.03;
  const mirrorHz = s * 0.04;

  const headlightR = s * 0.055;
  const wheelR = s * 0.22;
  const wheelHalfH = s * 0.1;

  const frontX = chassisHx;
  const rearX = -chassisHx;

  const [
    chassisCount,
    hoodCount,
    roofCount,
    trunkCount,
    bumperCount,
    wingCount,
    strutsTotal,
    mirrorsTotal,
    headlightsTotal,
    wheelsTotal,
    accentTotal,
  ] = splitCounts(count, [22, 10, 14, 6, 4, 5, 2, 2, 2, 20, 13]);

  const [leftStrutCount, rightStrutCount] = splitCounts(strutsTotal, [1, 1]);
  const [leftMirrorCount, rightMirrorCount] = splitCounts(mirrorsTotal, [1, 1]);
  const [leftHeadlightCount, rightHeadlightCount] = splitCounts(headlightsTotal, [1, 1]);
  const wheelCounts = splitCounts(wheelsTotal, [1, 1, 1, 1]);

  const chassis = sampleBoxSurface(chassisHx, chassisHy, chassisHz, chassisCount);

  // Capó: tubo ahusado (radiusTop hacia +X/adelante, más angosto) aplanado
  // en altura (eje local X, que tras rotar pasa a ser la altura mundial).
  const hood = translate(
    rotateAxisYtoX(scaleAxis(sampleTaperedCylinderSurface(hoodFrontR, hoodBackR, hoodHalfLen, hoodCount), 0, hoodFlatten)),
    hoodHalfLen,
    chassisHy + hoodBackR * hoodFlatten * 0.6,
    0,
  );

  const roof = translate(
    sampleBoxSurface(roofHx, roofHy, roofHz, roofCount),
    -chassisHx * 0.12,
    chassisHy + roofHy,
    0,
  );

  const trunk = translate(
    sampleBoxSurface(trunkHx, trunkHy, trunkHz, trunkCount),
    rearX + trunkHx * 0.6,
    chassisHy + trunkHy,
    0,
  );

  const bumper = translate(
    sampleBoxSurface(bumperHx, bumperHy, bumperHz, bumperCount),
    frontX + bumperHx * 0.7,
    -chassisHy * 0.3,
    0,
  );

  const wingY = chassisHy + trunkHy * 2 + strutHalfH * 2 + wingHy;
  const wing = translate(sampleBoxSurface(wingHx, wingHy, wingHz, wingCount), rearX + trunkHx * 0.4, wingY, 0);
  const strutBaseY = chassisHy + trunkHy * 2;
  const wingStruts = [
    translate(sampleCylinderSurface(strutR, strutHalfH, leftStrutCount), rearX + trunkHx * 0.4, strutBaseY + strutHalfH, -wingHz * 0.7),
    translate(sampleCylinderSurface(strutR, strutHalfH, rightStrutCount), rearX + trunkHx * 0.4, strutBaseY + strutHalfH, wingHz * 0.7),
  ];

  const mirrors = [
    translate(sampleBoxSurface(mirrorHx, mirrorHy, mirrorHz, leftMirrorCount), -chassisHx * 0.05, chassisHy + roofHy * 1.6, -roofHz - mirrorHz),
    translate(sampleBoxSurface(mirrorHx, mirrorHy, mirrorHz, rightMirrorCount), -chassisHx * 0.05, chassisHy + roofHy * 1.6, roofHz + mirrorHz),
  ];

  const headlights = [
    translate(sampleSphereSurface(headlightR, leftHeadlightCount), frontX * 0.96, chassisHy * 0.4, -chassisHz * 0.7),
    translate(sampleSphereSurface(headlightR, rightHeadlightCount), frontX * 0.96, chassisHy * 0.4, chassisHz * 0.7),
  ];

  const wheelOffsets: Array<[number, number]> = [
    [-chassisHx * 0.55, -chassisHz * 0.95],
    [chassisHx * 0.55, -chassisHz * 0.95],
    [-chassisHx * 0.55, chassisHz * 0.95],
    [chassisHx * 0.55, chassisHz * 0.95],
  ];
  const wheels = wheelOffsets.map(([wx, wz], i) =>
    translate(rotateAxisYtoX(sampleCylinderSurface(wheelR, wheelHalfH, wheelCounts[i])), wx, -chassisHy, wz),
  );

  const accentLines: Array<{ pts: Array<[number, number, number]>; weight: number }> = [
    {
      pts: [
        [0, chassisHy + hoodBackR * hoodFlatten, 0],
        [frontX, chassisHy + hoodFrontR * hoodFlatten, 0],
      ],
      weight: hoodHalfLen * 2,
    },
    {
      pts: [
        [rearX * 0.9, chassisHy * 0.3, -chassisHz * 0.98],
        [frontX * 0.9, chassisHy * 0.55, -chassisHz * 0.98],
      ],
      weight: chassisHx * 1.8,
    },
    {
      pts: [
        [rearX * 0.9, chassisHy * 0.3, chassisHz * 0.98],
        [frontX * 0.9, chassisHy * 0.55, chassisHz * 0.98],
      ],
      weight: chassisHx * 1.8,
    },
    ...wheelOffsets.map(([wx, wz]) => ({
      pts: [
        [wx - wheelR * 1.3, chassisHy * 0.2, wz] as [number, number, number],
        [wx, chassisHy * 0.75, wz] as [number, number, number],
        [wx + wheelR * 1.3, chassisHy * 0.2, wz] as [number, number, number],
      ],
      weight: wheelR * 2.6,
    })),
  ];
  const accentCounts = splitCounts(accentTotal, accentLines.map((l) => l.weight));
  const accentParts = accentLines.map((line, i) => samplePolyline(line.pts, accentCounts[i], s * 0.02));

  return concatParts([
    chassis,
    hood,
    roof,
    trunk,
    bumper,
    wing,
    ...wingStruts,
    ...mirrors,
    ...headlights,
    ...wheels,
    ...accentParts,
  ]);
}

// Teléfono: una sola caja delgada, alta y angosta (proporción reconocible
// de smartphone) — no necesita partes compuestas.
export function telefono(count: number): Float32Array {
  return sampleBoxSurface(s * 0.42, s * 0.85, s * 0.09, count);
}

// Medidas y posiciones de la figura humana, compartidas entre el tejido
// (persona()) y el esqueleto de hueso literal (personaBones(), ver
// HUMANOID_BONE_GENERATORS más abajo) — así el hueso cae SIEMPRE alineado
// exacto bajo el tejido/piel, sin importar qué tanto cambien las
// proporciones de una fase a otra.
export interface PersonaLayout {
  headR: number;
  neckR: number;
  neckHalfH: number;
  chestTopR: number;
  chestBottomR: number;
  chestHalfH: number;
  pelvisHx: number;
  pelvisHy: number;
  pelvisHz: number;
  shoulderR: number;
  upperArmTopR: number;
  upperArmBottomR: number;
  upperArmHalfH: number;
  forearmTopR: number;
  forearmBottomR: number;
  forearmHalfH: number;
  handR: number;
  thighTopR: number;
  thighBottomR: number;
  thighHalfH: number;
  calfTopR: number;
  calfBottomR: number;
  calfHalfH: number;
  footHx: number;
  footHy: number;
  footHz: number;
  waistY: number;
  pelvisCenterY: number;
  chestCenterY: number;
  chestTopY: number;
  neckCenterY: number;
  headCenterY: number;
  shoulderY: number;
  shoulderX: number;
  armX: number;
  upperArmCenterY: number;
  elbowY: number;
  forearmCenterY: number;
  wristY: number;
  handCenterY: number;
  hipX: number;
  hipY: number;
  thighCenterY: number;
  kneeY: number;
  calfCenterY: number;
  ankleY: number;
  footCenterY: number;
  chestFrontZ: number;
}

export function personaLayout(): PersonaLayout {
  const headR = s * 0.2;
  const neckR = s * 0.09;
  const neckHalfH = s * 0.045;
  const chestTopR = s * 0.34;
  const chestBottomR = s * 0.22; // cintura
  const chestHalfH = s * 0.28;
  const pelvisHx = s * 0.26;
  const pelvisHy = s * 0.14;
  const pelvisHz = s * 0.18;
  const shoulderR = s * 0.07;
  const upperArmTopR = s * 0.085;
  const upperArmBottomR = s * 0.06;
  const upperArmHalfH = s * 0.22;
  const forearmTopR = s * 0.06;
  const forearmBottomR = s * 0.045;
  const forearmHalfH = s * 0.2;
  const handR = s * 0.06;
  const thighTopR = s * 0.14;
  const thighBottomR = s * 0.1;
  const thighHalfH = s * 0.28;
  const calfTopR = s * 0.1;
  const calfBottomR = s * 0.07;
  const calfHalfH = s * 0.26;
  const footHx = s * 0.06;
  const footHy = s * 0.04;
  const footHz = s * 0.14;

  // Apilado en Y a partir de la línea de cintura (waistY = 0).
  const waistY = 0;
  const pelvisCenterY = waistY - pelvisHy;
  const chestCenterY = waistY + chestHalfH;
  const chestTopY = chestCenterY + chestHalfH;
  const neckCenterY = chestTopY + neckHalfH;
  const headCenterY = neckCenterY + neckHalfH + headR * 0.9;
  const shoulderY = chestTopY;
  const shoulderX = chestTopR * 0.95;
  const armX = shoulderX;
  const upperArmCenterY = shoulderY - upperArmHalfH;
  const elbowY = shoulderY - upperArmHalfH * 2;
  const forearmCenterY = elbowY - forearmHalfH;
  const wristY = elbowY - forearmHalfH * 2;
  const handCenterY = wristY - handR * 0.8;
  const hipX = pelvisHx * 0.5;
  const hipY = waistY - pelvisHy * 2;
  const thighCenterY = hipY - thighHalfH;
  const kneeY = hipY - thighHalfH * 2;
  const calfCenterY = kneeY - calfHalfH;
  const ankleY = kneeY - calfHalfH * 2;
  const footCenterY = ankleY - footHy;
  const chestFrontZ = chestTopR * 0.85;

  return {
    headR, neckR, neckHalfH, chestTopR, chestBottomR, chestHalfH,
    pelvisHx, pelvisHy, pelvisHz, shoulderR,
    upperArmTopR, upperArmBottomR, upperArmHalfH,
    forearmTopR, forearmBottomR, forearmHalfH, handR,
    thighTopR, thighBottomR, thighHalfH, calfTopR, calfBottomR, calfHalfH,
    footHx, footHy, footHz,
    waistY, pelvisCenterY, chestCenterY, chestTopY, neckCenterY, headCenterY,
    shoulderY, shoulderX, armX, upperArmCenterY, elbowY, forearmCenterY, wristY, handCenterY,
    hipX, hipY, thighCenterY, kneeY, calfCenterY, ankleY, footCenterY, chestFrontZ,
  };
}

// Persona/personaje anatómico: cabeza + cuello + pecho/pelvis ahusados (V de
// torso) + hombros + brazos/piernas en 2 segmentos c/u (más grueso arriba,
// más angosto abajo, como bíceps/muslo vs. muñeca/tobillo) + manos + pies,
// más líneas de acento (costillas, clavícula, línea abdominal) imitando el
// look anatómico de holograma de la referencia.
export function persona(count: number): Float32Array {
  const {
    headR, neckR, neckHalfH, chestTopR, chestBottomR, chestHalfH,
    pelvisHx, pelvisHy, pelvisHz, shoulderR,
    upperArmTopR, upperArmBottomR, upperArmHalfH,
    forearmTopR, forearmBottomR, forearmHalfH, handR,
    thighTopR, thighBottomR, thighHalfH, calfTopR, calfBottomR, calfHalfH,
    footHx, footHy, footHz,
    chestCenterY, chestTopY, neckCenterY, headCenterY,
    shoulderY, shoulderX, armX, upperArmCenterY, forearmCenterY, handCenterY,
    hipX, thighCenterY, calfCenterY, footCenterY, chestFrontZ,
    waistY, pelvisCenterY,
  } = personaLayout();

  const [
    headCount,
    neckCount,
    chestCount,
    pelvisCount,
    shouldersTotal,
    upperArmsTotal,
    forearmsTotal,
    handsTotal,
    thighsTotal,
    calvesTotal,
    feetTotal,
    accentTotal,
  ] = splitCounts(count, [8, 2, 16, 10, 2, 10, 8, 4, 14, 10, 6, 10]);

  const [leftShoulderCount, rightShoulderCount] = splitCounts(shouldersTotal, [1, 1]);
  const [leftUpperArmCount, rightUpperArmCount] = splitCounts(upperArmsTotal, [1, 1]);
  const [leftForearmCount, rightForearmCount] = splitCounts(forearmsTotal, [1, 1]);
  const [leftHandCount, rightHandCount] = splitCounts(handsTotal, [1, 1]);
  const [leftThighCount, rightThighCount] = splitCounts(thighsTotal, [1, 1]);
  const [leftCalfCount, rightCalfCount] = splitCounts(calvesTotal, [1, 1]);
  const [leftFootCount, rightFootCount] = splitCounts(feetTotal, [1, 1]);

  const head = translate(scaleAxis(sampleSphereSurface(headR, headCount), 2, 0.8), 0, headCenterY, 0);
  const neck = translate(sampleTaperedCylinderSurface(neckR, neckR * 1.1, neckHalfH, neckCount), 0, neckCenterY, 0);
  const chest = translate(sampleTaperedCylinderSurface(chestTopR, chestBottomR, chestHalfH, chestCount), 0, chestCenterY, 0);
  const pelvis = translate(sampleBoxSurface(pelvisHx, pelvisHy, pelvisHz, pelvisCount), 0, pelvisCenterY, 0);

  const shoulders = [
    translate(sampleSphereSurface(shoulderR, leftShoulderCount), -shoulderX, shoulderY, 0),
    translate(sampleSphereSurface(shoulderR, rightShoulderCount), shoulderX, shoulderY, 0),
  ];
  const upperArms = [
    translate(sampleTaperedCylinderSurface(upperArmTopR, upperArmBottomR, upperArmHalfH, leftUpperArmCount), -armX, upperArmCenterY, 0),
    translate(sampleTaperedCylinderSurface(upperArmTopR, upperArmBottomR, upperArmHalfH, rightUpperArmCount), armX, upperArmCenterY, 0),
  ];
  const forearms = [
    translate(sampleTaperedCylinderSurface(forearmTopR, forearmBottomR, forearmHalfH, leftForearmCount), -armX, forearmCenterY, 0),
    translate(sampleTaperedCylinderSurface(forearmTopR, forearmBottomR, forearmHalfH, rightForearmCount), armX, forearmCenterY, 0),
  ];
  const hands = [
    translate(scaleAxis(sampleSphereSurface(handR, leftHandCount), 2, 0.6), -armX, handCenterY, 0),
    translate(scaleAxis(sampleSphereSurface(handR, rightHandCount), 2, 0.6), armX, handCenterY, 0),
  ];
  const thighs = [
    translate(sampleTaperedCylinderSurface(thighTopR, thighBottomR, thighHalfH, leftThighCount), -hipX, thighCenterY, 0),
    translate(sampleTaperedCylinderSurface(thighTopR, thighBottomR, thighHalfH, rightThighCount), hipX, thighCenterY, 0),
  ];
  const calves = [
    translate(sampleTaperedCylinderSurface(calfTopR, calfBottomR, calfHalfH, leftCalfCount), -hipX, calfCenterY, 0),
    translate(sampleTaperedCylinderSurface(calfTopR, calfBottomR, calfHalfH, rightCalfCount), hipX, calfCenterY, 0),
  ];
  const feet = [
    translate(sampleBoxSurface(footHx, footHy, footHz, leftFootCount), -hipX, footCenterY, footHz * 0.5),
    translate(sampleBoxSurface(footHx, footHy, footHz, rightFootCount), hipX, footCenterY, footHz * 0.5),
  ];

  const ribY = [chestCenterY + chestHalfH * 0.5, chestCenterY, chestCenterY - chestHalfH * 0.4];
  const accentLines: Array<{ pts: Array<[number, number, number]>; weight: number }> = [
    { pts: [[-shoulderX * 0.7, shoulderY, chestFrontZ * 0.6], [shoulderX * 0.7, shoulderY, chestFrontZ * 0.6]], weight: shoulderX },
    ...ribY.map((y, i) => ({
      pts: [
        [-chestTopR * (0.75 - i * 0.08), y, chestFrontZ] as [number, number, number],
        [chestTopR * (0.75 - i * 0.08), y, chestFrontZ] as [number, number, number],
      ],
      weight: chestTopR,
    })),
    {
      pts: [
        [0, chestTopY * 0.9, chestFrontZ],
        [s * 0.02, chestCenterY, chestFrontZ * 0.95],
        [-s * 0.02, waistY + chestHalfH * 0.3, chestFrontZ * 0.9],
        [0, waistY, chestFrontZ * 0.85],
      ],
      weight: chestHalfH * 1.5,
    },
  ];
  const accentCounts = splitCounts(accentTotal, accentLines.map((l) => l.weight));
  const accentParts = accentLines.map((line, i) => samplePolyline(line.pts, accentCounts[i], s * 0.015));

  return concatParts([
    head,
    neck,
    chest,
    pelvis,
    ...shoulders,
    ...upperArms,
    ...forearms,
    ...hands,
    ...thighs,
    ...calves,
    ...feet,
    ...accentParts,
  ]);
}
