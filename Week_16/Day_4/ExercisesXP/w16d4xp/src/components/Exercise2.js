import raw from '../json/exr2.json'

const Exercise2 = () => {
    return (
        <>
            <h2>Hi This is a Title</h2>
            {raw.map((item, index) => {
                return (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Exercise2