function Add () {
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
           
<div style={{textAlign: "center",ma}}>
        <h1 style={{
                    color: "white",
                    marginTop: "200px",
                    fontSize: "60px",
                    fontWeight: 70,
                    fontFamily: "Montserrat, sans-serif",
                    marginLeft: "75px",
                    margin: 0 
                }}
>Add Product for Management </h1>
</div>
        </>
    )

}
export default Add