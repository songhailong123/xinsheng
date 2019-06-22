import React,{Component} from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import TopBar from './components/TopBar/topbar';
import ContentList from './components/ContentList/contentList';

export default class ERouter extends Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <TopBar/>
                    <ContentList/>
                    <Switch>
                        <Route path="/" component={TopBar}/>  
                    </Switch>
                </App>


            </HashRouter>
        )
    }
}
