import  { useState } from 'react'
import { Button, Modal, ModalActions, ModalContent, ModalHeader } from 'semantic-ui-react'
import { saveAs } from 'file-saver';
import { modelContentsDetails } from '../../constants/Contents';

const ModelContainer = (props: any) => {

    const [open, setOpen] = useState(false)

    const downloadTextFile = () => {
    fetch(modelContentsDetails.react.useEffectExample)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, 'image_filename.png'); 
      })
      .catch(error => console.error('Error downloading image:', error));
      };

    return (
        <>
           <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>{props.buttonName}</Button>}
      >
        <ModalHeader>{props.modelHeader}</ModalHeader>
        <ModalContent image>
          {props.modelContent}
        </ModalContent>
        <ModalActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => { downloadTextFile(); setOpen(false); }} positive>
           Download
          </Button>
        </ModalActions>
      </Modal>
        </>
    )
}

export default ModelContainer