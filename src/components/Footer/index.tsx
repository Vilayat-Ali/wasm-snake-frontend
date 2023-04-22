import type { NextPage } from 'next';
import moment from 'moment';

interface Props {}

const Footer: NextPage<Props> = () => {

  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © {moment().format('YYYY')} - Created with React, WASM & ❤️ by <a href="https://www.github.com/Vilayat-Ali">Vilayat</a></p>
      </div>
    </footer>
  )
}

export default Footer