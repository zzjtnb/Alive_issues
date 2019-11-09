const getters = {
    networkSuccess: state => state.common.networkSuccess,
    android: state => state.common.android,
    token: state => state.token.token,
    /**
     * github
     */
    githubUsername: state => state.configuration.githubUsername,
    blogTitle: state => state.configuration.blogTitle,
    blogDescribe: state => state.configuration.blogDescribe,
    htmlTitle: state => state.configuration.htmlTitle,
    fontColor: state => state.configuration.fontColor,
    useBackgroundImage: state => state.configuration.useBackgroundImage,
    backgroundColorLeft: state => state.configuration.backgroundColorLeft,
    backgroundColorRight: state => state.configuration.backgroundColorRight,
    audioUrl: state => state.configuration.audioUrl,
    mini: state => state.configuration.mini,
    audioAutoPlay: state => state.configuration.audioAutoPlay,
    webSites: state => state.configuration.webSites,
    avatarUrl: state => state.user.avatarUrl,
    name: state => state.user.name,
    location: state => state.user.location,
    blog: state => state.user.blog,
    followersTotal: state => state.user.followers,
    followingTotal: state => state.user.following,
    /**
     * Record
     */
    xianhua_num: state => state.common.xianhua_num,
    dianzhu_num: state => state.common.dianzhu_num,
    jingjiu_num: state => state.common.jingjiu_num,
    jingli_num: state => state.common.jingli_num,
    jugong_num: state => state.common.jugong_num,
}
export default getters
