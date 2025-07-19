function View () {
    return(
        <>
           {/* Background Image */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: "url('/pexels-umkreisel-app-956999.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -2
                }}
            />
            {/* Translucent Overlay */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "rgba(0,0,0,0.7)", // semi-transparent black
                    zIndex: -1
                }}
            />
        <h1> This is the view page</h1>
        </>
    )

}
export default View
