import {useState} from 'react';
import styles from "./Header.module.scss"
import { Radio, Button} from 'antd';
import { ReactComponent as MyIcon } from "shared/assets/icons/headerIcon.svg"
const Header = () => {
    const [size, setSize] = useState('middle');

    const handleSizeChange = (e) => {
        setSize(e.target.value);
        console.log(size)

    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.firstWrapper}>
                <MyIcon/>
                <h3 className={styles.title1}>Transfer from/to Polygon zkEVM is temporarily paused due to the planned network infrastructure migration. Service will resume as soon as it is done.</h3>
            </div>
            <div className={styles.secondWrapper}>
                <div className={styles.navigation_block}>
                    <Radio.Group value={size} onChange={handleSizeChange}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="middle">Default</Radio.Button>
                    </Radio.Group>
                </div>


                <div className={styles.wallet_block}>
                    <Button className={styles.connectBtn}>Connect Wallet</Button>

                </div>
            </div>

        </div>
    );
};

export default Header;