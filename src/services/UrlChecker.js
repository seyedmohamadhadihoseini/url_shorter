import { isUrl } from 'check-valid-url';

export default function IsUrlValid(url){
    return isUrl(url);
}