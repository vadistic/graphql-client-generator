/*
 *
 * Code generated by Graphql Client Generator.
 * DO NOT EDIT.
 * Please don't change this file manually but run 'something' to update it.
 * For more information, please read the docs: https://doclink.com/
 *
 */

import {
  BoardCreateInput,
  BoardSubscriptionWhereInput,
  BoardUpdateInput,
  BoardWhereInput,
  BoardWhereUniqueInput,
  PostCreateInput,
  PostCreateManyInput,
  PostCreateManyWithoutAuthorInput,
  PostCreateOneInput,
  PostCreateWithoutAuthorInput,
  PostScalarWhereInput,
  PostSubscriptionWhereInput,
  PostUpdateDataInput,
  PostUpdateInput,
  PostUpdateManyDataInput,
  PostUpdateManyInput,
  PostUpdateManyMutationInput,
  PostUpdateManyWithoutAuthorInput,
  PostUpdateManyWithWhereNestedInput,
  PostUpdateOneRequiredInput,
  PostUpdateWithoutAuthorDataInput,
  PostUpdateWithWhereUniqueNestedInput,
  PostUpdateWithWhereUniqueWithoutAuthorInput,
  PostUpsertNestedInput,
  PostUpsertWithWhereUniqueNestedInput,
  PostUpsertWithWhereUniqueWithoutAuthorInput,
  PostWhereInput,
  PostWhereUniqueInput,
  ThreadCreateInput,
  ThreadCreateManyInput,
  ThreadScalarWhereInput,
  ThreadSubscriptionWhereInput,
  ThreadUpdateDataInput,
  ThreadUpdateInput,
  ThreadUpdateManyDataInput,
  ThreadUpdateManyInput,
  ThreadUpdateManyMutationInput,
  ThreadUpdateManyWithWhereNestedInput,
  ThreadUpdateWithWhereUniqueNestedInput,
  ThreadUpsertWithWhereUniqueNestedInput,
  ThreadWhereInput,
  ThreadWhereUniqueInput,
  UserCreateInput,
  UserCreateManyInput,
  UserCreateOneInput,
  UserCreateOneWithoutPostsInput,
  UserCreateWithoutPostsInput,
  UserScalarWhereInput,
  UserSubscriptionWhereInput,
  UserUpdateDataInput,
  UserUpdateInput,
  UserUpdateManyDataInput,
  UserUpdateManyInput,
  UserUpdateManyMutationInput,
  UserUpdateManyWithWhereNestedInput,
  UserUpdateOneRequiredInput,
  UserUpdateOneRequiredWithoutPostsInput,
  UserUpdateWithoutPostsDataInput,
  UserUpdateWithWhereUniqueNestedInput,
  UserUpsertNestedInput,
  UserUpsertWithoutPostsInput,
  UserUpsertWithWhereUniqueNestedInput,
  UserWhereInput,
  UserWhereUniqueInput,
  DateTime,
  Long,
  BoardOrderByInput,
  MutationType,
  PostOrderByInput,
  ThreadOrderByInput,
  UserOrderByInput
} from './types'

import {
  BoardResponse,
  UserResponse,
  PostResponse,
  ThreadResponse,
  BoardConnectionResponse,
  PageInfoResponse,
  BoardEdgeResponse,
  AggregateBoardResponse,
  PostConnectionResponse,
  PostEdgeResponse,
  AggregatePostResponse,
  ThreadConnectionResponse,
  ThreadEdgeResponse,
  AggregateThreadResponse,
  UserConnectionResponse,
  UserEdgeResponse,
  AggregateUserResponse,
  NodeResponse,
  BatchPayloadResponse,
  BoardSubscriptionPayloadResponse,
  BoardPreviousValuesResponse,
  PostSubscriptionPayloadResponse,
  PostPreviousValuesResponse,
  ThreadSubscriptionPayloadResponse,
  ThreadPreviousValuesResponse,
  UserSubscriptionPayloadResponse,
  UserPreviousValuesResponse
} from './responses'

/*
 *
 * Root Client Interfaces
 *
 */

export interface QueryClient {
  board: (args?: { where: BoardWhereUniqueInput }) => Promise<BoardResponse | null> & BoardClient
  boards: (args: {
    where?: BoardWhereInput | null
    orderBy?: BoardOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<BoardResponse | null>> & BoardClient
  boardsConnection: (args: {
    where?: BoardWhereInput | null
    orderBy?: BoardOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<BoardConnectionResponse> & BoardConnectionClient
  post: (args?: { where: PostWhereUniqueInput }) => Promise<PostResponse | null> & PostClient
  posts: (args: {
    where?: PostWhereInput | null
    orderBy?: PostOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<PostResponse | null>> & PostClient
  postsConnection: (args: {
    where?: PostWhereInput | null
    orderBy?: PostOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<PostConnectionResponse> & PostConnectionClient
  thread: (args?: { where: ThreadWhereUniqueInput }) => Promise<ThreadResponse | null> & ThreadClient
  threads: (args: {
    where?: ThreadWhereInput | null
    orderBy?: ThreadOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<ThreadResponse | null>> & ThreadClient
  threadsConnection: (args: {
    where?: ThreadWhereInput | null
    orderBy?: ThreadOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<ThreadConnectionResponse> & ThreadConnectionClient
  user: (args?: { where: UserWhereUniqueInput }) => Promise<UserResponse | null> & UserClient
  users: (args: {
    where?: UserWhereInput | null
    orderBy?: UserOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<UserResponse | null>> & UserClient
  usersConnection: (args: {
    where?: UserWhereInput | null
    orderBy?: UserOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<UserConnectionResponse> & UserConnectionClient
  node: (args?: { id: string }) => Promise<NodeResponse | null> & NodeClient
}

export interface MutationClient {
  createBoard: (args: { data: BoardCreateInput }) => Promise<BoardResponse> & BoardClient
  updateBoard: (args?: {
    data: BoardUpdateInput
    where: BoardWhereUniqueInput
  }) => Promise<BoardResponse | null> & BoardClient
  upsertBoard: (args: {
    where: BoardWhereUniqueInput
    create: BoardCreateInput
    update: BoardUpdateInput
  }) => Promise<BoardResponse> & BoardClient
  deleteBoard: (args?: { where: BoardWhereUniqueInput }) => Promise<BoardResponse | null> & BoardClient
  deleteManyBoards: (args: { where?: BoardWhereInput | null }) => Promise<BatchPayloadResponse> & BatchPayloadClient
  createPost: (args: { data: PostCreateInput }) => Promise<PostResponse> & PostClient
  updatePost: (args?: {
    data: PostUpdateInput
    where: PostWhereUniqueInput
  }) => Promise<PostResponse | null> & PostClient
  updateManyPosts: (args: {
    data: PostUpdateManyMutationInput
    where?: PostWhereInput | null
  }) => Promise<BatchPayloadResponse> & BatchPayloadClient
  upsertPost: (args: {
    where: PostWhereUniqueInput
    create: PostCreateInput
    update: PostUpdateInput
  }) => Promise<PostResponse> & PostClient
  deletePost: (args?: { where: PostWhereUniqueInput }) => Promise<PostResponse | null> & PostClient
  deleteManyPosts: (args: { where?: PostWhereInput | null }) => Promise<BatchPayloadResponse> & BatchPayloadClient
  createThread: (args: { data: ThreadCreateInput }) => Promise<ThreadResponse> & ThreadClient
  updateThread: (args?: {
    data: ThreadUpdateInput
    where: ThreadWhereUniqueInput
  }) => Promise<ThreadResponse | null> & ThreadClient
  updateManyThreads: (args: {
    data: ThreadUpdateManyMutationInput
    where?: ThreadWhereInput | null
  }) => Promise<BatchPayloadResponse> & BatchPayloadClient
  upsertThread: (args: {
    where: ThreadWhereUniqueInput
    create: ThreadCreateInput
    update: ThreadUpdateInput
  }) => Promise<ThreadResponse> & ThreadClient
  deleteThread: (args?: { where: ThreadWhereUniqueInput }) => Promise<ThreadResponse | null> & ThreadClient
  deleteManyThreads: (args: { where?: ThreadWhereInput | null }) => Promise<BatchPayloadResponse> & BatchPayloadClient
  createUser: (args: { data: UserCreateInput }) => Promise<UserResponse> & UserClient
  updateUser: (args?: {
    data: UserUpdateInput
    where: UserWhereUniqueInput
  }) => Promise<UserResponse | null> & UserClient
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput
    where?: UserWhereInput | null
  }) => Promise<BatchPayloadResponse> & BatchPayloadClient
  upsertUser: (args: {
    where: UserWhereUniqueInput
    create: UserCreateInput
    update: UserUpdateInput
  }) => Promise<UserResponse> & UserClient
  deleteUser: (args?: { where: UserWhereUniqueInput }) => Promise<UserResponse | null> & UserClient
  deleteManyUsers: (args: { where?: UserWhereInput | null }) => Promise<BatchPayloadResponse> & BatchPayloadClient
}

export interface SubscriptionClient {
  board: (args?: { where?: BoardSubscriptionWhereInput | null }) => Promise<BoardSubscriptionPayloadResponse | null> & BoardSubscriptionPayloadClient
  post: (args?: { where?: PostSubscriptionWhereInput | null }) => Promise<PostSubscriptionPayloadResponse | null> & PostSubscriptionPayloadClient
  thread: (args?: { where?: ThreadSubscriptionWhereInput | null }) => Promise<ThreadSubscriptionPayloadResponse | null> & ThreadSubscriptionPayloadClient
  user: (args?: { where?: UserSubscriptionWhereInput | null }) => Promise<UserSubscriptionPayloadResponse | null> & UserSubscriptionPayloadClient
}

/*
 *
 * Client Interfaces
 *
 */

export interface BoardClient extends Fragmentable {
  id: () => Promise<string>
  createdAt: () => Promise<string>
  admins: (args?: {
    where?: UserWhereInput | null
    orderBy?: UserOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<UserResponse[] | null> & UserClient
  members: (args?: {
    where?: UserWhereInput | null
    orderBy?: UserOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<UserResponse[] | null> & UserClient
  threads: (args?: {
    where?: ThreadWhereInput | null
    orderBy?: ThreadOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<ThreadResponse[] | null> & ThreadClient
}

export interface UserClient extends Fragmentable {
  id: () => Promise<string>
  nationality: () => Promise<string | null>
  email: () => Promise<string>
  name: () => Promise<string | null>
  posts: (args?: {
    where?: PostWhereInput | null
    orderBy?: PostOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<PostResponse[] | null> & PostClient
}

export interface PostClient extends Fragmentable {
  id: () => Promise<string>
  author: () => Promise<UserResponse> & UserClient
  content: () => Promise<string | null>
  createdAt: () => Promise<string>
  published: () => Promise<boolean>
  title: () => Promise<string>
  updatedAt: () => Promise<string>
}

export interface ThreadClient extends Fragmentable {
  id: () => Promise<string>
  createdAt: () => Promise<string>
  author: () => Promise<UserResponse> & UserClient
  name: () => Promise<string>
  entry: () => Promise<PostResponse> & PostClient
  replies: (args?: {
    where?: PostWhereInput | null
    orderBy?: PostOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<PostResponse[] | null> & PostClient
}

export interface BoardConnectionClient extends Fragmentable {
  pageInfo: () => Promise<PageInfoResponse> & PageInfoClient
  edges: () => Promise<Array<BoardEdgeResponse | null>> & BoardEdgeClient
  aggregate: () => Promise<AggregateBoardResponse> & AggregateBoardClient
}

export interface PageInfoClient extends Fragmentable {
  hasNextPage: () => Promise<boolean>
  hasPreviousPage: () => Promise<boolean>
  startCursor: () => Promise<string | null>
  endCursor: () => Promise<string | null>
}

export interface BoardEdgeClient extends Fragmentable {
  node: () => Promise<BoardResponse> & BoardClient
  cursor: () => Promise<string>
}

export interface AggregateBoardClient extends Fragmentable {
  count: () => Promise<number>
}

export interface PostConnectionClient extends Fragmentable {
  pageInfo: () => Promise<PageInfoResponse> & PageInfoClient
  edges: () => Promise<Array<PostEdgeResponse | null>> & PostEdgeClient
  aggregate: () => Promise<AggregatePostResponse> & AggregatePostClient
}

export interface PostEdgeClient extends Fragmentable {
  node: () => Promise<PostResponse> & PostClient
  cursor: () => Promise<string>
}

export interface AggregatePostClient extends Fragmentable {
  count: () => Promise<number>
}

export interface ThreadConnectionClient extends Fragmentable {
  pageInfo: () => Promise<PageInfoResponse> & PageInfoClient
  edges: () => Promise<Array<ThreadEdgeResponse | null>> & ThreadEdgeClient
  aggregate: () => Promise<AggregateThreadResponse> & AggregateThreadClient
}

export interface ThreadEdgeClient extends Fragmentable {
  node: () => Promise<ThreadResponse> & ThreadClient
  cursor: () => Promise<string>
}

export interface AggregateThreadClient extends Fragmentable {
  count: () => Promise<number>
}

export interface UserConnectionClient extends Fragmentable {
  pageInfo: () => Promise<PageInfoResponse> & PageInfoClient
  edges: () => Promise<Array<UserEdgeResponse | null>> & UserEdgeClient
  aggregate: () => Promise<AggregateUserResponse> & AggregateUserClient
}

export interface UserEdgeClient extends Fragmentable {
  node: () => Promise<UserResponse> & UserClient
  cursor: () => Promise<string>
}

export interface AggregateUserClient extends Fragmentable {
  count: () => Promise<number>
}

export interface NodeClient extends Fragmentable {
  id: () => Promise<string>
}

export interface BatchPayloadClient extends Fragmentable {
  count: () => Promise<number>
}

export interface BoardSubscriptionPayloadClient extends Fragmentable {
  mutation: () => Promise<MutationType>
  node: () => Promise<BoardResponse | null> & BoardClient
  updatedFields: () => Promise<string[] | null>
  previousValues: () => Promise<BoardPreviousValuesResponse | null> & BoardPreviousValuesClient
}

export interface BoardPreviousValuesClient extends Fragmentable {
  id: () => Promise<string>
  createdAt: () => Promise<string>
}

export interface PostSubscriptionPayloadClient extends Fragmentable {
  mutation: () => Promise<MutationType>
  node: () => Promise<PostResponse | null> & PostClient
  updatedFields: () => Promise<string[] | null>
  previousValues: () => Promise<PostPreviousValuesResponse | null> & PostPreviousValuesClient
}

export interface PostPreviousValuesClient extends Fragmentable {
  id: () => Promise<string>
  content: () => Promise<string | null>
  createdAt: () => Promise<string>
  published: () => Promise<boolean>
  title: () => Promise<string>
  updatedAt: () => Promise<string>
}

export interface ThreadSubscriptionPayloadClient extends Fragmentable {
  mutation: () => Promise<MutationType>
  node: () => Promise<ThreadResponse | null> & ThreadClient
  updatedFields: () => Promise<string[] | null>
  previousValues: () => Promise<ThreadPreviousValuesResponse | null> & ThreadPreviousValuesClient
}

export interface ThreadPreviousValuesClient extends Fragmentable {
  id: () => Promise<string>
  createdAt: () => Promise<string>
  name: () => Promise<string>
}

export interface UserSubscriptionPayloadClient extends Fragmentable {
  mutation: () => Promise<MutationType>
  node: () => Promise<UserResponse | null> & UserClient
  updatedFields: () => Promise<string[] | null>
  previousValues: () => Promise<UserPreviousValuesResponse | null> & UserPreviousValuesClient
}

export interface UserPreviousValuesClient extends Fragmentable {
  id: () => Promise<string>
  nationality: () => Promise<string | null>
  email: () => Promise<string>
  name: () => Promise<string | null>
}

