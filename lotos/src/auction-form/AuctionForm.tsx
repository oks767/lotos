import styles from './AuctionForm.module.scss'
function AuctionForm() {
  return (
    <div className="container">
        <ul className="list" style={styles}>
            <li>Параметры и требования</li>
            <li>Участник 1</li>
            <li>Участник 2</li>
            <li>Участник 3</li>
            <li>Участник 4</li>
        </ul>
    </div>
  )
}

export default AuctionForm