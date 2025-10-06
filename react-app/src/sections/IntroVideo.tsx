export default function IntroVideo() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="ratio ratio-16x9 border rounded">
              <video src="/img2/video-tm.mp4" autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


