import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Timeline, Icon} from 'antd';
import {Calendar} from 'antd';

function App() {
    return (
        <div style={{margin: 100, padding: '0 168px',}}>
            <h1>2018下半年美柚杭州技术部服务端组分享</h1>
            <hr/>
            <br/>
            <Timeline pending="期待更多...">
                <Timeline.Item color="green">
                    <p>2018-09-24</p>
                    <p>聚石塔日志的收集</p>
                    <p>@余新乐</p>
                </Timeline.Item>
                <Timeline.Item color="green">
                    <p>2018-09-26</p>
                    <p>聚石塔</p>
                    <p>@胡小东</p>
                </Timeline.Item>
                <Timeline.Item color="green">
                    <p>@胡小东</p>
                    <p>2018-10-02</p>
                    <p>聚石塔日志</p>
                    <p>@张艳恒</p>
                </Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{fontSize: '16px'}}/>}>
                    <p>时间待定</p>
                    <p>主题正在征集中</p>
                </Timeline.Item>
            </Timeline>
            <Calendar/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
