import { s } from "./constants";
import { concatParts, rotateAxisYtoX, sampleBoxSurface, samplePolyline, sampleSphereSurface, sampleSphereSurfaceBand, sampleTaperedCylinderSurface, scaleAxis, splitCounts, translate } from "./sampling";

// --- Partes del cuerpo formables por separado (Fase 17) ---
//
// Mismo patrón que persona()/carro(): primitivos existentes +
// translate/concatParts/splitCounts, pero escaladas para verse bien como
// objeto INDIVIDUAL (más grandes que la fracción interna equivalente
// dentro de persona()). El tejido/piel (Nanobots) sale de estas — el
// esqueleto/hueso literal (Microbots) sale de las funciones *Bones más
// abajo, ver HUMANOID_BONE_GENERATORS.

// Constantes de posición/radio compartidas entre el tejido (cabezaSkin/
// cabezaHair/cabezaEyes/cabezaLips) y el hueso (cabezaBones, ver más
// abajo) — así el cráneo queda SIEMPRE por dentro de la piel (mismo
// centro, `skullR` es una fracción de `headR`), garantizando el hueco
// "sin contacto" pedido, en vez de mantener dos escalas independientes a
// mano que podrían desalinearse.
export function cabezaLayout() {
  const headR = s * 0.5;
  const neckR = s * 0.24;
  const neckHalfH = s * 0.16;
  const headCenterY = neckHalfH + headR * 0.9;
  const skullR = headR * 0.78; // cráneo de hueso: ~78% del radio de la piel
  return { headR, neckR, neckHalfH, headCenterY, skullR };
}

// --- Tejido/piel de "cabeza" (Fase 21) — reemplaza la esfera achatada
// lisa de antes por una cara con mandíbula/mentón, orejas y nariz, más
// ojos/cabello/labios como generadores PROPIOS (ver CABEZA_PARTS): cada
// uno es la fuente de verdad tanto para su ola de color (formShapeWithRoles)
// como, sumados, para la silueta completa (cabeza(), usada por DETALLE).

export function cabezaSkin(count: number): Float32Array {
  const { headR, neckR, neckHalfH, headCenterY } = cabezaLayout();
  const jawR = headR * 0.62;
  const jawCenterY = headCenterY - headR * 0.55;
  const earR = headR * 0.22;
  const earY = headCenterY - headR * 0.05;
  const noseR = headR * 0.14;
  const noseCenterY = headCenterY - headR * 0.05;

  const [craniumCount, jawCount, earsTotal, noseCount, neckCount] = splitCounts(count, [44, 22, 10, 8, 16]);
  const [leftEarCount, rightEarCount] = splitCounts(earsTotal, [1, 1]);

  // Cráneo (cobertura general de la cabeza) + mandíbula (esfera más chica
  // y angosta, desplazada abajo-adelante) — el solapamiento entre ambas
  // da la silueta de "cara con mentón" en vez de una bola perfecta.
  const cranium = translate(scaleAxis(sampleSphereSurface(headR, craniumCount), 2, 0.86), 0, headCenterY, 0);
  const jaw = translate(scaleAxis(sampleSphereSurface(jawR, jawCount), 2, 0.8), 0, jawCenterY, headR * 0.1);
  const ears = [
    translate(scaleAxis(sampleSphereSurface(earR, leftEarCount), 0, 0.35), -headR * 0.92, earY, 0),
    translate(scaleAxis(sampleSphereSurface(earR, rightEarCount), 0, 0.35), headR * 0.92, earY, 0),
  ];
  const nose = translate(scaleAxis(sampleSphereSurface(noseR, noseCount), 1, 0.7), 0, noseCenterY, headR * 0.88);
  const neck = translate(sampleTaperedCylinderSurface(neckR, neckR * 1.15, neckHalfH, neckCount), 0, 0, 0);

  return concatParts([cranium, jaw, ...ears, nose, neck]);
}

export function cabezaHair(count: number): Float32Array {
  const { headR, headCenterY } = cabezaLayout();
  const [capCount, browsTotal] = splitCounts(count, [88, 12]);
  const [leftBrowCount, rightBrowCount] = splitCounts(browsTotal, [1, 1]);

  // Cuero cabelludo: banda superior de una esfera levemente más grande
  // que la piel en esa zona — al ir "por fuera", tapa visualmente a la
  // piel de abajo sin necesitar excluir nada (mismo principio de
  // solapamiento que el resto del archivo). Fase 22: `yFracMin` sube de
  // 0.05 a 0.34 (por encima de la altura de cejas, ≈0.18) — antes el
  // cabello arrancaba MÁS ABAJO que cejas/ojos y les caía encima; ahora
  // queda una franja de frente despejada entre el nacimiento del pelo y
  // las cejas.
  const cap = translate(scaleAxis(sampleSphereSurfaceBand(headR * 1.04, capCount, 0.34, 1), 2, 0.88), 0, headCenterY, 0);
  const browY = headCenterY + headR * 0.18;
  const browZ = headR * 0.84;
  const browSpan = headR * 0.16;
  const brows = [
    samplePolyline(
      [[-headR * 0.42, browY, browZ], [-headR * 0.42 + browSpan, browY + headR * 0.02, browZ]],
      leftBrowCount,
      headR * 0.015,
    ),
    samplePolyline(
      [[headR * 0.42 - browSpan, browY + headR * 0.02, browZ], [headR * 0.42, browY, browZ]],
      rightBrowCount,
      headR * 0.015,
    ),
  ];
  return concatParts([cap, ...brows]);
}

export function cabezaEyes(count: number): Float32Array {
  const { headR, headCenterY } = cabezaLayout();
  const eyeR = headR * 0.1;
  const eyeY = headCenterY + headR * 0.08;
  const eyeX = headR * 0.36;
  const eyeZ = headR * 0.82;
  const [leftCount, rightCount] = splitCounts(count, [1, 1]);
  return concatParts([
    translate(sampleSphereSurface(eyeR, leftCount), -eyeX, eyeY, eyeZ),
    translate(sampleSphereSurface(eyeR, rightCount), eyeX, eyeY, eyeZ),
  ]);
}

export function cabezaLips(count: number): Float32Array {
  const { headR, headCenterY } = cabezaLayout();
  const lipY = headCenterY - headR * 0.42;
  const lipZ = headR * 0.85;
  const halfWidth = headR * 0.22;
  return samplePolyline(
    [
      [-halfWidth, lipY, lipZ],
      [0, lipY - headR * 0.02, lipZ * 1.01],
      [halfWidth, lipY, lipZ],
    ],
    count,
    headR * 0.03,
  );
}

// Única fuente de verdad de peso+color fijo por parte anatómica — la usan
// tanto cabeza() (silueta completa, sin color propio, para DETALLE/
// ESTRUCTURA) como formShapeWithRoles (una ola de color POR PARTE, con su
// tono fijo, en vez de derivarlo de la foto adjuntada — ver ahí).
export const CABEZA_PARTS: Array<{
  name: string;
  generator: (count: number) => Float32Array;
  weight: number;
  color: number;
}> = [
  { name: "piel", generator: cabezaSkin, weight: 0.55, color: 0xdba579 },
  { name: "cabello", generator: cabezaHair, weight: 0.28, color: 0x2b1b12 },
  { name: "ojos", generator: cabezaEyes, weight: 0.07, color: 0x3f2a1a },
  { name: "labios", generator: cabezaLips, weight: 0.1, color: 0xb1524a },
];

// Wrapper delgado: la silueta completa de "cabeza" es la SUMA de las 4
// partes de arriba, en las mismas proporciones que sus olas de color —
// sin duplicar geometría en dos lugares distintos.
export function cabeza(count: number): Float32Array {
  const counts = splitCounts(count, CABEZA_PARTS.map((p) => p.weight));
  return concatParts(CABEZA_PARTS.map((part, i) => part.generator(counts[i])));
}

export function torso(count: number): Float32Array {
  const chestTopR = s * 0.62;
  const chestBottomR = s * 0.42;
  const chestHalfH = s * 0.55;
  const pelvisHx = s * 0.48;
  const pelvisHy = s * 0.26;
  const pelvisHz = s * 0.34;
  const shoulderR = s * 0.14;

  const waistY = 0;
  const pelvisCenterY = waistY - pelvisHy;
  const chestCenterY = waistY + chestHalfH;
  const chestTopY = chestCenterY + chestHalfH;
  const shoulderX = chestTopR * 0.95;

  const [chestCount, pelvisCount, shouldersTotal] = splitCounts(count, [55, 30, 15]);
  const [leftShoulderCount, rightShoulderCount] = splitCounts(shouldersTotal, [1, 1]);

  const chest = translate(sampleTaperedCylinderSurface(chestTopR, chestBottomR, chestHalfH, chestCount), 0, chestCenterY, 0);
  const pelvis = translate(sampleBoxSurface(pelvisHx, pelvisHy, pelvisHz, pelvisCount), 0, pelvisCenterY, 0);
  const shoulders = [
    translate(sampleSphereSurface(shoulderR, leftShoulderCount), -shoulderX, chestTopY, 0),
    translate(sampleSphereSurface(shoulderR, rightShoulderCount), shoulderX, chestTopY, 0),
  ];
  return concatParts([chest, pelvis, ...shoulders]);
}

// Brazo: hombro + brazo (bíceps) ahusado + codo + antebrazo ahusado + mano
// con dedos abanicados (una simple esfera achatada, como en persona(), no
// alcanza como objeto SOLO). Se arma en vertical (mismo eje que pierna()) y
// se acuesta a horizontal al final (rotateAxisYtoX) — un brazo extendido
// hacia el costado es inconfundible con una pierna vertical, incluso disperso.
export function brazo(count: number): Float32Array {
  const shoulderR = s * 0.22;
  const upperArmTopR = s * 0.26;
  const upperArmBottomR = s * 0.19;
  const upperArmHalfH = s * 0.6;
  const elbowR = s * 0.16;
  const forearmTopR = s * 0.18;
  const forearmBottomR = s * 0.12;
  const forearmHalfH = s * 0.55;
  const handHx = s * 0.15;
  const handHy = s * 0.2;
  const handHz = s * 0.06;
  const fingerR = s * 0.035;
  const fingerHalfH = s * 0.15;

  const shoulderY = 0;
  const upperArmCenterY = shoulderY - upperArmHalfH;
  const elbowY = shoulderY - upperArmHalfH * 2;
  const forearmCenterY = elbowY - forearmHalfH;
  const wristY = elbowY - forearmHalfH * 2;
  const palmCenterY = wristY - handHy;
  const palmBottomY = wristY - handHy * 2;
  const fingerCenterY = palmBottomY - fingerHalfH;

  const [shoulderCount, upperArmCount, elbowCount, forearmCount, handCount, fingersTotal] =
    splitCounts(count, [6, 24, 4, 20, 16, 30]);
  const fingerCounts = splitCounts(fingersTotal, [1, 1, 1, 1, 1]);

  const shoulder = translate(sampleSphereSurface(shoulderR, shoulderCount), 0, shoulderY, 0);
  const upperArm = translate(sampleTaperedCylinderSurface(upperArmTopR, upperArmBottomR, upperArmHalfH, upperArmCount), 0, upperArmCenterY, 0);
  const elbow = translate(sampleSphereSurface(elbowR, elbowCount), 0, elbowY, 0);
  const forearm = translate(sampleTaperedCylinderSurface(forearmTopR, forearmBottomR, forearmHalfH, forearmCount), 0, forearmCenterY, 0);
  const hand = translate(sampleBoxSurface(handHx, handHy, handHz, handCount), 0, palmCenterY, 0);
  const fingerOffsets = [-2, -1, 0, 1, 2];
  const fingers = fingerOffsets.map((off, i) =>
    translate(sampleTaperedCylinderSurface(fingerR, fingerR * 1.3, fingerHalfH, fingerCounts[i]), off * handHx * 0.4, fingerCenterY, 0),
  );
  return rotateAxisYtoX(concatParts([shoulder, upperArm, elbow, forearm, hand, ...fingers]));
}

// Pierna: cadera + muslo ahusado + rodilla + pantorrilla ahusada + pie con
// dedos (cajas chicas, más detalle que la caja simple de persona()).
export function pierna(count: number): Float32Array {
  const hipR = s * 0.24;
  const thighTopR = s * 0.3;
  const thighBottomR = s * 0.2;
  const thighHalfH = s * 0.65;
  const kneeR = s * 0.18;
  const calfTopR = s * 0.2;
  const calfBottomR = s * 0.13;
  const calfHalfH = s * 0.62;
  const footHx = s * 0.16;
  const footHy = s * 0.09;
  const footHz = s * 0.36;
  const toeR = s * 0.04;
  const toeHalfH = s * 0.09;

  const hipY = 0;
  const thighCenterY = hipY - thighHalfH;
  const kneeY = hipY - thighHalfH * 2;
  const calfCenterY = kneeY - calfHalfH;
  const ankleY = kneeY - calfHalfH * 2;
  const footCenterY = ankleY - footHy;

  const [hipCount, thighCount, kneeCount, calfCount, footCount, toesTotal] =
    splitCounts(count, [6, 26, 4, 22, 22, 20]);
  const toeCounts = splitCounts(toesTotal, [1, 1, 1, 1, 1]);

  const hip = translate(sampleSphereSurface(hipR, hipCount), 0, hipY, 0);
  const thigh = translate(sampleTaperedCylinderSurface(thighTopR, thighBottomR, thighHalfH, thighCount), 0, thighCenterY, 0);
  const knee = translate(sampleSphereSurface(kneeR, kneeCount), 0, kneeY, 0);
  const calf = translate(sampleTaperedCylinderSurface(calfTopR, calfBottomR, calfHalfH, calfCount), 0, calfCenterY, 0);
  const foot = translate(sampleBoxSurface(footHx, footHy, footHz, footCount), 0, footCenterY, footHz * 0.5);
  const toeOffsets = [-0.6, -0.3, 0, 0.3, 0.6];
  const toes = toeOffsets.map((off, i) =>
    translate(sampleBoxSurface(toeR, toeR, toeHalfH, toeCounts[i]), off * footHx, footCenterY, footHz + toeHalfH),
  );
  return concatParts([hip, thigh, knee, calf, foot, ...toes]);
}

// Mano: muñeca + palma + 5 dedos ahusados de largo distinto (pulgar más
// corto y separado, medio el más largo).
export function mano(count: number): Float32Array {
  const wristR = s * 0.22;
  const wristHalfH = s * 0.18;
  const palmHx = s * 0.42;
  const palmHy = s * 0.5;
  const palmHz = s * 0.16;
  const fingerR = s * 0.07;
  const fingerTipR = s * 0.05;
  const fingerLengths = [0.55, 0.72, 0.78, 0.7, 0.5]; // pulgar, índice, medio, anular, meñique
  const fingerOffsetsX = [-0.85, -0.45, 0, 0.45, 0.85];

  const wristCenterY = 0;
  const palmCenterY = wristCenterY - wristHalfH - palmHy;
  const palmBottomY = palmCenterY - palmHy;

  const [wristCount, palmCount, fingersTotal] = splitCounts(count, [10, 35, 55]);
  const fingerCounts = splitCounts(fingersTotal, [0.9, 1, 1.1, 1, 0.8]);

  const wrist = translate(sampleTaperedCylinderSurface(wristR, wristR * 1.1, wristHalfH, wristCount), 0, wristCenterY, 0);
  const palm = translate(sampleBoxSurface(palmHx, palmHy, palmHz, palmCount), 0, palmCenterY, 0);
  const fingers = fingerOffsetsX.map((offX, i) => {
    const halfH = s * fingerLengths[i] * 0.5;
    return translate(
      sampleTaperedCylinderSurface(fingerR, fingerTipR, halfH, fingerCounts[i]),
      offX * palmHx,
      palmBottomY - halfH,
      0,
    );
  });
  return concatParts([wrist, palm, ...fingers]);
}

// Pie: tobillo + empeine + 5 dedos cortos.
export function pie(count: number): Float32Array {
  const ankleR = s * 0.24;
  const ankleHalfH = s * 0.2;
  const footHx = s * 0.34;
  const footHy = s * 0.22;
  const footHz = s * 0.75;
  const toeR = s * 0.09;
  const toeLengthScale = [0.75, 1, 0.95, 0.85, 0.7];
  const toeOffsetsX = [-0.65, -0.3, 0, 0.3, 0.65];

  const ankleCenterY = 0;
  const footCenterY = ankleCenterY - ankleHalfH - footHy;
  const footFrontZ = footHz * 0.3 + footHz;

  const [ankleCount, footCount, toesTotal] = splitCounts(count, [10, 55, 35]);
  const toeCounts = splitCounts(toesTotal, [1, 1, 1, 1, 1]);

  const ankle = translate(sampleTaperedCylinderSurface(ankleR, ankleR * 1.1, ankleHalfH, ankleCount), 0, ankleCenterY, 0);
  const foot = translate(sampleBoxSurface(footHx, footHy, footHz, footCount), 0, footCenterY, footHz * 0.3);
  const toes = toeOffsetsX.map((offX, i) => {
    const halfLen = s * 0.16 * toeLengthScale[i];
    return translate(sampleBoxSurface(toeR, toeR, halfLen, toeCounts[i]), offX * footHx, footCenterY, footFrontZ + halfLen);
  });
  return concatParts([ankle, foot, ...toes]);
}
