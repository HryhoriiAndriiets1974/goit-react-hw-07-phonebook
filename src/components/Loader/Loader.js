import css from '../Loader/Loader.module.css';
import {GiSpinningBlades} from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

export default function Loader() {
  return (
    <>
      <IconContext.Provider value={{color: '#de14b9'}}>
        <div role='alert'>
          <div className={css.loader}>
            <div className={css.loader__spinner}>
              <GiSpinningBlades size='90' />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
};
