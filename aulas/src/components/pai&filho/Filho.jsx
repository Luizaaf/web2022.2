import './style.css'

export default function Filho({callbackPai}) {
  return (
    <div className="filho">
      <button
        onClick={() => {
          // alert("Cliquei no botão")
          callbackPai("John")
        }}
      >OI PAI</button>
    </div>
  )
}