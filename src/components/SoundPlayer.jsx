import React from 'react';

const circleIcon = {
    //color: grey,
};

class SoundPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <iframe className={'player'} title={"march"} width={'100%'} height={'150'} scrolling={'no'} frameBorder={'no'} src={this.props.url}/>
            </div>
        );
    }
}

export default SoundPlayer;