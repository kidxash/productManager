function Home ()  {
    return (
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
                    background: "rgba(0,0,0,0.5", // semi-transparent black
                    zIndex: -1
                }}
            />
            <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <h1 style={{
                    color: "white",
                    marginTop: "200px",
                    fontSize: "100px",
                    fontWeight: 70,
                    fontFamily: "Montserrat, sans-serif",
                    marginLeft: "75px"
                }}>
                    MyProductManager
                </h1>
                <h3 style={{
                    color: "white",
                    marginTop: "150px",
                    fontSize: "25px",
                    fontWeight: 10,
                    fontFamily: "Montserrat, sans-serif",
                    marginLeft: "75px"
                }}>
                    Created by Ashton Singleton,Teri'Ana Taylor, Sara Racel, and Scott Nguyen
                </h3>
            </div>
        </>
    );
}
export default Home