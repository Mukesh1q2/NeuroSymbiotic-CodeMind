
import type { SimulationParams } from './types';

export const INITIAL_SIMULATION_PARAMS: SimulationParams = {
  agentCount: 50,
  decoherenceRate: 0.05,
  fieldStrength: 1.0,
  interactionRange: 15.0,
  classicalDamping: 0.02,
  awarenessScaling: 1.2,
  entanglementStrength: 0.1,
  memoryDecay: 0.01,
  collapseThreshold: 0.15,
  quantumDiffusion: 0,
  entropyRate: 0.01,
  vasanaDecay: 0.01,
  sankalpaStrength: 0,
};

export const DREAMLIKE_PARAMS_PARTIAL: Partial<SimulationParams> = {
  decoherenceRate: 0.1,
  collapseThreshold: 0.3,
  fieldStrength: 0.5,
  quantumDiffusion: 0.2,
  entanglementStrength: 0.2,
  entropyRate: 0.05,
  sankalpaStrength: 0.1,
};

export const FIELD_SIZE = 30;
export const FIELD_GRID_SIZE = 25;