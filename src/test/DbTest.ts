import { UserCredentialsDBAccess } from "../Authorization/UserCredentialsDBAccess";
import { workingPosition } from "../Shared/Model";
import { UsersDBAccess } from "../User/UsersDBAccess";


class DbTest {

	public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();
	public userDbAccess: UsersDBAccess = new UsersDBAccess();
}

// new DbTest().dbAccess.putUserCredential({
// 	username: 'user',
// 	password: 'password1',
// 	accessRights: [1, 2, 3]
// })

new DbTest().userDbAccess.putUser({
	age: 30,
	email: 'some@email.com',
	id: 'someId',
	name: 'SomeName',
	workingPosition: workingPosition.ENGINEER
})