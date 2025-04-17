export const BUTTON_STYLE = {
  WHITE_STROKE: ' border-white text-white',
  BLACK_STROKE: 'border-black text-black',
  FILL: 'border-0 bg-black text-white',
};

export const BUTTON_THICKNESS = {
  THICK: 'THICK',
  THIN: 'THIN',
};

export const BUTTON_ARROW = {
  ON: 'ARROW_ON',
  OFF: 'ARROW_OFF',
};

export const BUTTON_TYPE = {
  [BUTTON_THICKNESS.THICK]: {
    [BUTTON_ARROW.ON]: 'h-[56px] w-[150px]',
    [BUTTON_ARROW.OFF]: 'h-[56px] w-[182px]',
  },
  [BUTTON_THICKNESS.THIN]: {
    [BUTTON_ARROW.ON]: 'h-[48px] w-[178px] text-sm',
    [BUTTON_ARROW.OFF]: 'h-[48px] w-[162px] text-sm',
  },
};
