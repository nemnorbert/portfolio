export interface TranslatesCurrent {
    iso?: string;
    home: {
      name: string
    }
    about: {
      title: string;
      text: string;
      skill: string;
      learn: string;
    }
    cv: string;
    work: {
      btns: {
        demo: string;
        details: string;
      }
    }
    contact: {
      card: string;
      send: string;
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