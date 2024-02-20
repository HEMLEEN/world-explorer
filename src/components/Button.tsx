
const ButtonProps = (props:any) => {

  return (

    <button className='button' onClick={props.onClick} >
        {props.buttonName}
    </button>
  )

}

export default ButtonProps