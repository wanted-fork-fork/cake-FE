import { AuthPermissionType } from "@src/constant/api.constant";

export const withAuthentication = async (
  ctx,
  authPermission = AuthPermissionType.ALL,
) => {
  try {
    let userPermission = AuthPermissionType.ALL;

    const user = localStorage.getItem("token");
    if (user) {
      userPermission = AuthPermissionType.USER;

      if (authPermission === AuthPermissionType.GUEST) {
        ctx.res.writeHeader(307, {
          Location: "/",
        });
        ctx.res.end();

        return { props: {} };
      }
    }

    if (userPermission >= authPermission) {
      return { props: {} };
    }

    if (userPermission === AuthPermissionType.USER) {
      ctx.res.writeHeader(307, {
        Location: `/401`,
      });
      ctx.res.end();

      return { props: {} };
    }

    ctx.res.writeHeader(307, {
      Location: `login`,
    });
    ctx.res.end();

    return { props: {} };
  } catch (e) {
    return {
      props: {
        error: e.toString(),
      },
    };
  }
};

export default { withAuthentication };
