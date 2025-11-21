export interface Request {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: { [key: string]: string };
    body?: any;
}
