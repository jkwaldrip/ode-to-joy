export interface Durations {
    eighth: number;
    quarter: number;
    dottedQuarter: number;
    half: number;
    whole: number;
}

export type Duration =
    | 'eighth'
    | 'quarter'
    | 'dottedQuarter'
    | 'half'
    | 'whole';
