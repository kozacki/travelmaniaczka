import * as crypto from 'crypto';

export const hashPwd = (p: string): string => {
    const hmac = crypto.createHmac('sha512', 'kadklsndiq332hjeo12jr9-30124239rjqoisdfnaioshfhuiwhrfo4yuewq8oedhquiwdfghbqwe3iufaasdnjkhasbfaukhgfbvuiewghfvbweiogdsl;v,sdxvgvswedj19032ur4189(I)&*%^&$#@%$@#%&YGDSRGHYREY');
    hmac.update(p);
    return hmac.digest('hex');
};