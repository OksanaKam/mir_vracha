type TCardRecomendation = {
    id: number,
    paragraph1: string,
    paragraph2: string,
    paragraph3: string,
    cite: string,
}

export interface IProps {
    item: TCardRecomendation;
}