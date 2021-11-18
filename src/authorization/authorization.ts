import {AuthorizationContext, AuthorizationDecision, AuthorizationMetadata, Authorizer} from '@loopback/authorization';
import {Provider} from '@loopback/context';
import {SessionRepository} from '../repositories';
export class MyAuthorizationProvider implements Provider<Authorizer> {
  /**
   * @returns an authorizer function
   *
   */
  value(): Authorizer {
    return this.authorize.bind(this);
  }

  async authorize(
    context: AuthorizationContext,
    metadata: AuthorizationMetadata,
  ) {
    console.log(context, metadata)
    const sessionRepository: SessionRepository = await context.invocationContext.get('repositories.session')
    const v = await sessionRepository.get('2')
    console.log(v)
    // if (
    //   context.resource === 'OrderController.prototype.cancelOrder' &&
    //   context.principals[0].name === 'user-01'
    // ) {
    //   return AuthorizationDecision.DENY;
    // }
    return AuthorizationDecision.DENY;
  }
}
