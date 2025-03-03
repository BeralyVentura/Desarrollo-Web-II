export const AmountDisplay = ({ label, amount }) => {
    return (
        <div className="text-2xl text-blue-600 font-bold">
            {label}:
            <span  className="font-black text-black"> 
                {amount.toLocaleString('es-US', { style: 'currency', currency: 'USD' })  }
            </span>
        </div>
    )
}
