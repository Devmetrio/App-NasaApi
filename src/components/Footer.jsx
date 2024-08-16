export default function Footer(props) {
    const { showModal, handleToggleModel, data } = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>APP NASA</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleToggleModel} className={showModal ? 'hidden' : ''}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}