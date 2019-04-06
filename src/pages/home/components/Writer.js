import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    WriterWrapper,
    WriterHeader,
    QRCode,
    QRCodeDesc,
    RecommendWriter,
    WriterInfoSwitch,
    WriterItem,
    WriterDesc
} from '../style'

class Writer extends Component {
    render () {
        const { list } = this.props;

        return (
            <WriterWrapper>
                <WriterHeader>
                    <QRCode>
                        <img alt= '' className='pic' src = 'https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' />
                        <QRCodeDesc>
                            <div className = 'downLoadTitle'>下载简书App > </div>
                            <p className= 'desc' >随时随地发现和创造内容</p>
                        </QRCodeDesc>
                    </QRCode>
                    <RecommendWriter>
                        推荐作者
                        <WriterInfoSwitch >换一批</WriterInfoSwitch>
                    </RecommendWriter>
                    
                </WriterHeader>
                <div>
                    {
                        list.map((item) => {
                            return(
                                <WriterItem key = {item.get('id')}>
                                    <img className='pic' src = {item.get('imgUrl')} alt='' />
                                    <WriterDesc>
                                        <div>
                                            <span className='writeName'>{ item.get('name') }</span>
                                            <span className='follow' >+关注</span>
                                        </div>
                                        <p className = 'desc'>{ item.get('liked') }</p>
                                    </WriterDesc>
                                </WriterItem>
                            )
                        })
                    }
                </div>
                {/* <WriterItem>
                    <img className='pic' src = "https://upload.jianshu.io/users/upload_avatars/8972166/2a0fb78d-6417-47cb-a57c-2ce4a7b92609.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='' />
                    <WriterDesc>
                        <div>
                            <span className='writeName'>冰千里</span>
                            <span className='follow' >+关注</span>
                        </div>
                        <p className = 'desc'>写了511.5k字 · 8.3k喜欢</p>
                    </WriterDesc>
                </WriterItem>
                <WriterItem>
                    <img className='pic' src = "https://upload.jianshu.io/users/upload_avatars/8972166/2a0fb78d-6417-47cb-a57c-2ce4a7b92609.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='' />
                    <WriterDesc>
                        <div>
                            <span className='writeName'>冰千里</span>
                            <span className='follow' >+关注</span>
                        </div>
                        <p className = 'desc'>写了511.5k字 · 8.3k喜欢</p>
                    </WriterDesc>
                </WriterItem>
                <WriterItem>
                    <img className='pic' src = "https://upload.jianshu.io/users/upload_avatars/8972166/2a0fb78d-6417-47cb-a57c-2ce4a7b92609.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='' />
                    <WriterDesc>
                        <div>
                            <span className='writeName'>冰千里</span>
                            <span className='follow' >+关注</span>
                        </div>
                        <p className = 'desc'>写了511.5k字 · 8.3k喜欢</p>
                    </WriterDesc>
                </WriterItem>
                <WriterItem>
                    <img className='pic' src = "https://upload.jianshu.io/users/upload_avatars/8972166/2a0fb78d-6417-47cb-a57c-2ce4a7b92609.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='' />
                    <WriterDesc>
                        <div>
                            <span className='writeName'>冰千里</span>
                            <span className='follow' >+关注</span>
                        </div>
                        <p className = 'desc'>写了511.5k字 · 8.3k喜欢</p>
                    </WriterDesc>
                </WriterItem>
                <WriterItem>
                    <img className='pic' src = "https://upload.jianshu.io/users/upload_avatars/8972166/2a0fb78d-6417-47cb-a57c-2ce4a7b92609.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='' />
                    <WriterDesc>
                        <div>
                            <span className='writeName'>冰千里</span>
                            <span className='follow' >+关注</span>
                        </div>
                        <p className = 'desc'>写了511.5k字 · 8.3k喜欢</p>
                    </WriterDesc>
                </WriterItem> */}
                
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','recommendWrite'])
})


// export default Writer
export default connect(mapState,null)(Writer)