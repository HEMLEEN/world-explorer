
const ButtonProps = (props:any) => {

  return (

    <button className='button' onClick={props.onClick} >
        {props.ButtonText}
    </button>
  )

}

export default ButtonProps