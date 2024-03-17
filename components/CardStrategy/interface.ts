type TCardStrategy = {
    id: number,
    image: HTMLImageElement,
    title: string,
    span: string,
    subtitle: string,
    text: string,
    cite: string,
}

export interface IProps {
    card: TCardStrategy;
}