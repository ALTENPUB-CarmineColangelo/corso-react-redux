import Auth from './Auth';
import Users from './Users';

export const Container = () => {
    return (
        <div className="container">
            <Auth />
            <Users />
        </div>
    )
}