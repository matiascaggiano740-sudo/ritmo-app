import { describe, expect, it } from 'vitest';
import { currentPhase } from './index';
describe('fase actual', () => { it('identifica la base como fase 0', () => { expect(currentPhase).toEqual({number:0,title:'Base'}); }); });
