import { s } from "./constants";
import { carveSocket, concatParts, rotateAxisYtoX, sampleLongBoneSurface, samplePolyline, sampleSphereSurface, scaleAxis, splitCounts, translate } from "./sampling";
import { cabezaLayout } from "./anatomy";
import { personaLayout } from "./composites";


// --- Hueso literal (Microbots) para formas humanoides (Fase 17) ---
//
// Para persona/cabeza/torso/brazo/pierna/mano/pie, el exoesqueleto de
// Microbots ya NO es el anclas+MST genérico de abajo — es una nube de
// puntos densa sobre huesos REALES (sampleLongBoneSurface + esferas para
// cráneo/vértebras/articulaciones), usando personaLayout() para que caiga
// exacto alineado bajo el tejido de persona()/brazo()/etc. Se lee sólido
// por densidad de puntos, igual que ya hace DETALLE/COLOR de Nanobots —
// no hace falta red de nodos+vigas para esto.
export function personaBones(count: number): Float32Array {
  const L = personaLayout();
  const skullR = L.headR * 0.75;
  const spineR = L.neckR * 0.7;
  const humerusShaft = L.upperArmBottomR * 0.4;
  const humerusEnd = L.upperArmTopR * 0.55;
  const humerusHalf = L.upperArmHalfH * 0.75;
  const forearmBoneShaft = L.forearmBottomR * 0.4;
  const forearmBoneEnd = L.forearmTopR * 0.55;
  const forearmBoneHalf = L.forearmHalfH * 0.75;
  const femurShaft = L.thighBottomR * 0.4;
  const femurEnd = L.thighTopR * 0.55;
  const femurHalf = L.thighHalfH * 0.75;
  const tibiaShaft = L.calfBottomR * 0.4;
  const tibiaEnd = L.calfTopR * 0.55;
  const tibiaHalf = L.calfHalfH * 0.75;
  const handBoneR = L.handR * 0.5;
  const footBoneR = L.footHy * 0.7;

  const spineY = [L.chestTopY, L.chestCenterY, L.waistY, L.pelvisCenterY];
  const ribY = [L.chestCenterY + L.chestHalfH * 0.4, L.chestCenterY, L.chestCenterY - L.chestHalfH * 0.4];

  const [
    skullCount, spineTotal, ribsTotal,
    humerusTotal, forearmBoneTotal, handBoneTotal,
    femurTotal, tibiaBoneTotal, footBoneTotal,
  ] = splitCounts(count, [10, 10, 10, 14, 12, 4, 16, 14, 4]);

  const spineCounts = splitCounts(spineTotal, spineY.map(() => 1));
  const ribCounts = splitCounts(ribsTotal, ribY.map(() => 1));
  const [leftHumerusCount, rightHumerusCount] = splitCounts(humerusTotal, [1, 1]);
  const [leftForearmBoneCount, rightForearmBoneCount] = splitCounts(forearmBoneTotal, [1, 1]);
  const [leftHandBoneCount, rightHandBoneCount] = splitCounts(handBoneTotal, [1, 1]);
  const [leftFemurCount, rightFemurCount] = splitCounts(femurTotal, [1, 1]);
  const [leftTibiaCount, rightTibiaCount] = splitCounts(tibiaBoneTotal, [1, 1]);
  const [leftFootBoneCount, rightFootBoneCount] = splitCounts(footBoneTotal, [1, 1]);

  const skull = translate(sampleSphereSurface(skullR, skullCount), 0, L.headCenterY, 0);
  const spine = spineY.map((y, i) => translate(sampleSphereSurface(spineR, spineCounts[i]), 0, y, 0));
  const ribs = ribY.map((y, i) =>
    samplePolyline(
      [
        [-L.chestTopR * 0.7, y, L.chestFrontZ * 0.9],
        [0, y, L.chestFrontZ],
        [L.chestTopR * 0.7, y, L.chestFrontZ * 0.9],
      ],
      ribCounts[i],
      s * 0.01,
    ),
  );
  const humeri = [
    translate(sampleLongBoneSurface(humerusShaft, humerusEnd, humerusHalf, leftHumerusCount), -L.armX, L.upperArmCenterY, 0),
    translate(sampleLongBoneSurface(humerusShaft, humerusEnd, humerusHalf, rightHumerusCount), L.armX, L.upperArmCenterY, 0),
  ];
  const forearmBones = [
    translate(sampleLongBoneSurface(forearmBoneShaft, forearmBoneEnd, forearmBoneHalf, leftForearmBoneCount), -L.armX, L.forearmCenterY, 0),
    translate(sampleLongBoneSurface(forearmBoneShaft, forearmBoneEnd, forearmBoneHalf, rightForearmBoneCount), L.armX, L.forearmCenterY, 0),
  ];
  const handBones = [
    translate(sampleSphereSurface(handBoneR, leftHandBoneCount), -L.armX, L.handCenterY, 0),
    translate(sampleSphereSurface(handBoneR, rightHandBoneCount), L.armX, L.handCenterY, 0),
  ];
  const femurs = [
    translate(sampleLongBoneSurface(femurShaft, femurEnd, femurHalf, leftFemurCount), -L.hipX, L.thighCenterY, 0),
    translate(sampleLongBoneSurface(femurShaft, femurEnd, femurHalf, rightFemurCount), L.hipX, L.thighCenterY, 0),
  ];
  const tibiaBones = [
    translate(sampleLongBoneSurface(tibiaShaft, tibiaEnd, tibiaHalf, leftTibiaCount), -L.hipX, L.calfCenterY, 0),
    translate(sampleLongBoneSurface(tibiaShaft, tibiaEnd, tibiaHalf, rightTibiaCount), L.hipX, L.calfCenterY, 0),
  ];
  const footBones = [
    translate(sampleSphereSurface(footBoneR, leftFootBoneCount), -L.hipX, L.footCenterY, 0),
    translate(sampleSphereSurface(footBoneR, rightFootBoneCount), L.hipX, L.footCenterY, 0),
  ];

  return concatParts([
    skull, ...spine, ...ribs,
    ...humeri, ...forearmBones, ...handBones,
    ...femurs, ...tibiaBones, ...footBones,
  ]);
}

// Cráneo real (Fase 21): reemplaza la esfera lisa de antes por un cráneo
// con cuencas oculares y cavidad nasal "talladas" (carveSocket, ver
// arriba), mandíbula con arco de dientes, y columna cervical (sin
// cambios). `skullR` sale de cabezaLayout() (≈78% del radio de la piel de
// cabezaSkin) — el cráneo queda siempre por dentro del tejido, sin tocarlo.
export function cabezaBones(count: number): Float32Array {
  const { headCenterY, skullR } = cabezaLayout();
  const spineR = s * 0.1;
  const jawR = skullR * 0.6;
  const jawCenterY = headCenterY - skullR * 0.55;

  // Fase 22: más peso relativo a cráneo/mandíbula/dientes (más
  // definición) y algo menos a columna (elemento menor en la silueta de
  // "cabeza" sola).
  const [craniumCount, jawCount, teethCount, spineCount] = splitCounts(count, [48, 20, 14, 18]);

  // Se tallan/abultan ANTES de trasladar (las direcciones de los conos
  // son relativas al centro de la esfera, en el origen). `carveSocket`
  // con pullFactor<1 hunde (cuenca/cavidad), con pullFactor>1 abulta
  // (arco superciliar/pómulo/puente nasal) — mismo helper, mismo costo.
  const cranium = scaleAxis(sampleSphereSurface(skullR, craniumCount), 2, 0.88);
  carveSocket(cranium, craniumCount, -0.42, 0.12, 0.9, 0.8, 0.6); // cuenca ocular izquierda (más ancha/profunda)
  carveSocket(cranium, craniumCount, 0.42, 0.12, 0.9, 0.8, 0.6); // cuenca ocular derecha
  carveSocket(cranium, craniumCount, 0, -0.15, 1, 0.94, 0.72); // cavidad nasal (más definida)
  carveSocket(cranium, craniumCount, -0.42, 0.32, 0.85, 0.9, 1.15); // arco superciliar izquierdo
  carveSocket(cranium, craniumCount, 0.42, 0.32, 0.85, 0.9, 1.15); // arco superciliar derecho
  carveSocket(cranium, craniumCount, -0.55, -0.05, 0.8, 0.88, 1.12); // pómulo izquierdo
  carveSocket(cranium, craniumCount, 0.55, -0.05, 0.8, 0.88, 1.12); // pómulo derecho
  carveSocket(cranium, craniumCount, 0, 0.05, 1, 0.95, 1.08); // puente nasal
  const craniumPlaced = translate(cranium, 0, headCenterY, 0);

  // Mandíbula: arco de 5 puntos (cóndilo/articulación -> ángulo mandibular
  // -> mentón -> ángulo -> cóndilo) en vez de 3 — contorno más nítido y
  // anatómico; el jitter de samplePolyline sigue dando volumen de hueso.
  const condyleY = jawCenterY + jawR * 0.7;
  const angleY = jawCenterY + jawR * 0.1;
  const chinY = jawCenterY - jawR * 0.35;
  const jaw = samplePolyline(
    [
      [-jawR, condyleY, 0],
      [-jawR * 0.95, angleY, jawR * 0.35],
      [0, chinY, jawR * 0.78],
      [jawR * 0.95, angleY, jawR * 0.35],
      [jawR, condyleY, 0],
    ],
    jawCount,
    jawR * 0.1,
  );

  // Dientes: 2 arcos cortos (superior/inferior) — se leen como "hilera"
  // por posición, no por geometría de diente individual.
  const teethY = jawCenterY - jawR * 0.05;
  const teethZ = jawR * 0.65;
  const [upperTeethCount, lowerTeethCount] = splitCounts(teethCount, [1, 1]);
  const teeth = [
    samplePolyline(
      [[-jawR * 0.55, teethY + jawR * 0.18, teethZ], [jawR * 0.55, teethY + jawR * 0.18, teethZ]],
      upperTeethCount,
      jawR * 0.03,
    ),
    samplePolyline(
      [[-jawR * 0.5, teethY - jawR * 0.1, teethZ * 0.95], [jawR * 0.5, teethY - jawR * 0.1, teethZ * 0.95]],
      lowerTeethCount,
      jawR * 0.03,
    ),
  ];

  const spine = translate(sampleSphereSurface(spineR, spineCount), 0, 0, 0);

  return concatParts([craniumPlaced, jaw, ...teeth, spine]);
}

export function torsoBones(count: number): Float32Array {
  const chestTopR = s * 0.62;
  const chestHalfH = s * 0.55;
  const pelvisHy = s * 0.26;
  const waistY = 0;
  const chestCenterY = waistY + chestHalfH;
  const chestTopY = chestCenterY + chestHalfH;
  const pelvisCenterY = waistY - pelvisHy;
  const chestFrontZ = chestTopR * 0.85;
  const shoulderX = chestTopR * 0.95;
  const spineR = s * 0.09;
  const shoulderBladeR = s * 0.12;

  const spineY = [chestTopY, chestCenterY, waistY, pelvisCenterY];
  const ribY = [chestCenterY + chestHalfH * 0.4, chestCenterY, chestCenterY - chestHalfH * 0.4];

  const [spineTotal, ribsTotal, shouldersTotal] = splitCounts(count, [30, 45, 25]);
  const spineCounts = splitCounts(spineTotal, spineY.map(() => 1));
  const ribCounts = splitCounts(ribsTotal, ribY.map(() => 1));
  const [leftShoulderCount, rightShoulderCount] = splitCounts(shouldersTotal, [1, 1]);

  const spine = spineY.map((y, i) => translate(sampleSphereSurface(spineR, spineCounts[i]), 0, y, 0));
  const ribs = ribY.map((y, i) =>
    samplePolyline(
      [
        [-chestTopR * 0.7, y, chestFrontZ * 0.9],
        [0, y, chestFrontZ],
        [chestTopR * 0.7, y, chestFrontZ * 0.9],
      ],
      ribCounts[i],
      s * 0.01,
    ),
  );
  const shoulders = [
    translate(sampleSphereSurface(shoulderBladeR, leftShoulderCount), -shoulderX, chestTopY, 0),
    translate(sampleSphereSurface(shoulderBladeR, rightShoulderCount), shoulderX, chestTopY, 0),
  ];
  return concatParts([...spine, ...ribs, ...shoulders]);
}

// Igual que brazo(): se acuesta a horizontal (rotateAxisYtoX) para que el
// hueso del brazo quede alineado con el tejido de brazo(), ambos rotados
// desde el mismo eje vertical.
export function brazoBones(count: number): Float32Array {
  const upperArmHalfH = s * 0.6;
  const forearmHalfH = s * 0.55;
  const handHy = s * 0.2;
  const shoulderY = 0;
  const upperArmCenterY = shoulderY - upperArmHalfH;
  const elbowY = shoulderY - upperArmHalfH * 2;
  const forearmCenterY = elbowY - forearmHalfH;
  const wristY = elbowY - forearmHalfH * 2;
  const handCenterY = wristY - handHy;

  const humerusShaft = s * 0.08;
  const humerusEnd = s * 0.13;
  const forearmBoneShaft = s * 0.06;
  const forearmBoneEnd = s * 0.1;
  const handBoneR = s * 0.09;

  const [humerusCount, forearmBoneCount, handBoneCount] = splitCounts(count, [40, 40, 20]);
  const humerus = translate(sampleLongBoneSurface(humerusShaft, humerusEnd, upperArmHalfH * 0.8, humerusCount), 0, upperArmCenterY, 0);
  const forearmBone = translate(sampleLongBoneSurface(forearmBoneShaft, forearmBoneEnd, forearmHalfH * 0.8, forearmBoneCount), 0, forearmCenterY, 0);
  const handBone = translate(sampleSphereSurface(handBoneR, handBoneCount), 0, handCenterY, 0);
  return rotateAxisYtoX(concatParts([humerus, forearmBone, handBone]));
}

export function piernaBones(count: number): Float32Array {
  const thighHalfH = s * 0.65;
  const calfHalfH = s * 0.62;
  const footHy = s * 0.09;
  const hipY = 0;
  const thighCenterY = hipY - thighHalfH;
  const kneeY = hipY - thighHalfH * 2;
  const calfCenterY = kneeY - calfHalfH;
  const ankleY = kneeY - calfHalfH * 2;
  const footCenterY = ankleY - footHy;

  const femurShaft = s * 0.1;
  const femurEnd = s * 0.16;
  const tibiaShaft = s * 0.08;
  const tibiaEnd = s * 0.12;
  const footBoneR = s * 0.1;

  const [femurCount, tibiaCount, footBoneCount] = splitCounts(count, [42, 40, 18]);
  const femur = translate(sampleLongBoneSurface(femurShaft, femurEnd, thighHalfH * 0.8, femurCount), 0, thighCenterY, 0);
  const tibia = translate(sampleLongBoneSurface(tibiaShaft, tibiaEnd, calfHalfH * 0.8, tibiaCount), 0, calfCenterY, 0);
  const footBone = translate(sampleSphereSurface(footBoneR, footBoneCount), 0, footCenterY, 0);
  return concatParts([femur, tibia, footBone]);
}

export function manoBones(count: number): Float32Array {
  const wristHalfH = s * 0.18;
  const palmHy = s * 0.5;
  const palmHx = s * 0.42;
  const fingerLengths = [0.55, 0.72, 0.78, 0.7, 0.5];
  const fingerOffsetsX = [-0.85, -0.45, 0, 0.45, 0.85];

  const wristCenterY = 0;
  const palmCenterY = wristCenterY - wristHalfH - palmHy;
  const palmBottomY = palmCenterY - palmHy;

  const wristR = s * 0.08;
  const metacarpalR = s * 0.035;

  const [wristCount, fingersTotal] = splitCounts(count, [15, 85]);
  const fingerCounts = splitCounts(fingersTotal, [0.9, 1, 1.1, 1, 0.8]);

  const wrist = translate(sampleSphereSurface(wristR, wristCount), 0, wristCenterY, 0);
  const fingers = fingerOffsetsX.map((offX, i) => {
    const halfH = s * fingerLengths[i] * 0.4;
    return translate(
      sampleLongBoneSurface(metacarpalR * 0.7, metacarpalR, halfH, fingerCounts[i]),
      offX * palmHx,
      palmBottomY - halfH,
      0,
    );
  });
  return concatParts([wrist, ...fingers]);
}

export function pieBones(count: number): Float32Array {
  const ankleHalfH = s * 0.2;
  const footHy = s * 0.22;
  const footHz = s * 0.75;
  const footHx = s * 0.34;
  const toeLengthScale = [0.75, 1, 0.95, 0.85, 0.7];
  const toeOffsetsX = [-0.65, -0.3, 0, 0.3, 0.65];

  const ankleCenterY = 0;
  const footCenterY = ankleCenterY - ankleHalfH - footHy;
  const footFrontZ = footHz * 0.3 + footHz;

  const ankleR = s * 0.1;
  const metatarsalR = s * 0.04;

  const [ankleCount, toesTotal] = splitCounts(count, [20, 80]);
  const toeCounts = splitCounts(toesTotal, [1, 1, 1, 1, 1]);

  const ankle = translate(sampleSphereSurface(ankleR, ankleCount), 0, ankleCenterY, 0);
  const toes = toeOffsetsX.map((offX, i) => {
    const halfLen = s * 0.16 * toeLengthScale[i] * 0.7;
    return translate(
      sampleLongBoneSurface(metatarsalR * 0.7, metatarsalR, halfLen, toeCounts[i]),
      offX * footHx,
      footCenterY,
      footFrontZ * 0.6,
    );
  });
  return concatParts([ankle, ...toes]);
}

// Formas humanoides con hueso LITERAL (Fase 17): buildExoskeleton() usa
// esto en vez del anclas+MST genérico de abajo cuando el nombre matchea —
// las formas no-humanoides (cubo, carro, etc.) no tienen huesos reales,
// así que siguen con el exoesqueleto genérico.
export const HUMANOID_BONE_GENERATORS: Record<string, (count: number) => Float32Array> = {
  persona: personaBones,
  cabeza: cabezaBones,
  torso: torsoBones,
  brazo: brazoBones,
  pierna: piernaBones,
  mano: manoBones,
  pie: pieBones,
};
