export interface TranslatesCurrent {
    iso?: string;
    home: {
      name: string
    }
    about: {
      text: string
    }
    work: {
      btns: {
        demo: string;
        details: string;
      }
    }
    nav: {
      home: string;
      work: string;
      contact: string;
      about: string;
    }
}

export interface Translates {
  current: TranslatesCurrent;
}