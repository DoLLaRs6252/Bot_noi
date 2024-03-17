import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://vos.line-scdn.net/line-api-web-cms/b1___1.png)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="h-full">
        <div className="hero-content text-center text-neutral-content">
          <div className="mt-20">
            <h1 className="mb-5 text-5xl font-bold">Frontend Programing</h1>
            <p className="mb-5 p-10 text-xl">โดยเว็บไซต์ที่ทำตามโจทย์Frontend ที่พี่ๆได้ให้มาครับ สามารถกดดูด้านล่างหรือสามารถดูตรงปุ่มMenuด้านบนได้เลยครับ และสามารถกดกลับมาหน้าหลักได้ผ่านปุ่ม BOT NOI ซ้ายบน</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="card w-full sm:w-96 bg-neutral text-neutral-content m-4">
            <div className="card-body">
              <h2 className="card-title">Star calculater</h2>
              <p>ที่พิมดาวเป็นรูปแบบตามจำนวนที่ให้มา</p>
              <div className="card-actions justify-end">
                <Link to="/Star_page"><button className="btn">Enter!</button></Link>
              </div>
            </div>
          </div>
          <div className="card w-full sm:w-96 bg-neutral text-neutral-content m-4">
            <div className="card-body">
              <h2 className="card-title">Pokemon</h2>
              <p>Pokemon dex ที่ดึงAPIจากที่พี่ให้มา</p>
              <div className="card-actions justify-end">
                <Link to="/Pokemon_page"><button className="btn">Enter!</button></Link>
              </div>
            </div>
          </div>
          <div className="card w-full sm:w-96 bg-neutral text-neutral-content m-4">
            <div className="card-body">
              <h2 className="card-title">Resume</h2>
              <p>Resumeของผมที่เป็นแบบresponsive</p>
              <div className="card-actions justify-end">
                <Link to="/Resume_page"><button className="btn">Enter!</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
