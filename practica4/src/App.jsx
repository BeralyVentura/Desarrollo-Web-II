import React, { useContext } from "react";
import { BudgetForm } from "./components/BugetForm";
import { BudgetStateContext } from "./context/BudgetContext";

function App() {
    const state=useContext(BudgetStateContext)
    const isValidBudget=state.budget>0;

    return (
        <>
            <header className="bg-blue-600 py-8 max-h-72">
                <h1 className="uppercase text-center font-black text-4x1 text-white" >
                Planificador de gastos
                </h1>
            </header >
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10" >
                    {isValidBudget? <h1>Detalle de gastos</h1>: <BudgetForm />}
            </div>
        </>
    )
}

export default App;