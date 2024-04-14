import { View } from '@tarojs/components';
import { useEffect } from 'react';
import './index.css';

const rechargeDialog = (...props) => {
    useEffect(() => {
        console.log('info-props-taroTest', props);
    }, []);
    return (
        <>
            <View style={{ height: 500 }}>
                假装这里是个付费墙
                {/* <Text className='text-[yellow]'>这里是class测试文本</Text> */}
                {/* <Button>如果有余额展示: 这里是购买按钮demo,</Button> */}
                {/* <Button>如果没余额展示: 这里是充值按钮demo,</Button> */}
            </View>
        </>
    );
};

export default rechargeDialog;
