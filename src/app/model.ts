export interface Data {
    data: Error[];
}

export interface Error {
    category:      string;
    errorPosition: number;
    message:       string;
    replacements:  string[];
    errorLength:   number;
}
