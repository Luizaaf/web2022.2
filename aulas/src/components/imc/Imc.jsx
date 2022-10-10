import './style.css'

export const Imc = ({peso, altura}) => {

  const calculaIMC = (peso, altura) => {
    return peso / altura ** 2
  }

  return (
    <div className="imc-container">
      <p>O seu IMC é: {calculaIMC(peso, altura).toFixed(2)}</p>
    </div>
  )
}