type TCardModal = {
    id: number,
    image: HTMLImageElement,
    title: string,
    text: string,
    bold: string,
    cite: string,
    span1: string,
    span2: string
}

export interface IProps {
    card: TCardModal;
}