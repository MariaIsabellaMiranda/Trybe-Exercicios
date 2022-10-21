import ILens from '../../interfaces/Lens';

export const lensMock:ILens = {
  degree: 10,
  antiGlare: false,
  blueLightFilter: true,
}

export const lensMockWithId:ILens & {id: string} = {
  id: '62cf1fc6498565d94eba52cd',
  degree: 10,
  antiGlare: false,
  blueLightFilter: true,
}