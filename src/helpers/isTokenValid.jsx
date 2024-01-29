import jwtDecode from "jwt-decode";

function isTokenValid(token) {

    // OF ER EEN TOKEN IS
    // OF DE CODE GELDIG IS
    // VANG DE ERROR OP

    try {
        const decodedToken = jwtDecode(token);

        if (!token) {
            return false;
        } else return decodedToken.exp * 1000 > Date.now();

    } catch (error) {
        console.error(error);
        return false;
    }

}
export default isTokenValid;