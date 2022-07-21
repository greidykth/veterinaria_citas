const Alert = ({alert}) => {
    let style = "bg-green-600";
    let message = "Datos guardados correctamente";

    if (alert === "danger"){
        style ="bg-red-600";
        message="Todos los campos son obligatorios"
    }
  return (
    <div className={`p-2 font-bold text-center text-white mb-3 uppercase ${style}`}>{message}</div>
  )
}

export default Alert