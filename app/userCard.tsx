import { DefaultSession } from "next-auth";

// Default Session TYPE

export function UserCard( { user } : { user: DefaultSession["user"]}) {
    
    return (
        <div className="card">
            <div className="card-body">
                <p>Current Logged In User</p>
                <h5 className="card-title">{user?.name}</h5>
                <p className="card-text">{user?.email}</p>
            </div>
        </div>
    )
}