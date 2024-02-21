import { modelContentsDetails } from '../constants/Contents';
import { saveAs } from 'file-saver';

const downloadDomExmpleTextFile = () => {
    fetch(modelContentsDetails.javascript.domExample)
        .then(response => response.blob())
        .then(blob => {
            saveAs(blob, 'image_filename.png');
        })
        .catch(error => console.error('Error downloading image:', error));
};
const downloadUseEffectTextFile = () => {
    fetch(modelContentsDetails.react.useEffectExample)
        .then(response => response.blob())
        .then(blob => {
            saveAs(blob, 'image_filename.png');
        })
        .catch(error => console.error('Error downloading image:', error));
};

export {
    downloadUseEffectTextFile,
    downloadDomExmpleTextFile
}      