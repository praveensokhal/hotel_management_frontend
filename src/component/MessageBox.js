let MessageBox = ({component: Component,...rest},props)=>{
  console.log("dsd",rest,props)
    return(
        <>
  	<Component {...props} props={rest}/>
        </>
    )
}

export default MessageBox