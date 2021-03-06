/*
 *
 * Code generated by clientql generator.
 * DO NOT EDIT.
 * Please don't change this file manually but run generator to update it.
 * For more information check: https"//github.com/vadistic/clientql
 *
 */

/*
 *
 * ScalarTypeDefinition Typings
 *
 */

export type DateTime = string

export type Long = any



/*
 *
 * InterfaceTypeDefinition Typings
 *
 */

export interface Node {
  id: string
}



/*
 *
 * ObjectTypeDefinition Typings
 *
 */

export interface AggregateBoard {
  __typename: 'AggregateBoard'
  count: number
}

export interface AggregatePost {
  __typename: 'AggregatePost'
  count: number
}

export interface AggregateThread {
  __typename: 'AggregateThread'
  count: number
}

export interface AggregateUser {
  __typename: 'AggregateUser'
  count: number
}

export interface BatchPayload {
  __typename: 'BatchPayload'
  count: number
}

export interface Board {
  __typename: 'Board'
  id: string
  createdAt: string
  admins?: User[] | null
  members?: User[] | null
  threads?: Thread[] | null
}

export interface BoardConnection {
  __typename: 'BoardConnection'
  pageInfo: PageInfo
  edges: Array<BoardEdge | null>
  aggregate: AggregateBoard
}

export interface BoardEdge {
  __typename: 'BoardEdge'
  node: Board
  cursor: string
}

export interface BoardPreviousValues {
  __typename: 'BoardPreviousValues'
  id: string
  createdAt: string
}

export interface BoardSubscriptionPayload {
  __typename: 'BoardSubscriptionPayload'
  mutation: MutationType
  node?: Board | null
  updatedFields?: string[] | null
  previousValues?: BoardPreviousValues | null
}

export interface Mutation {
  __typename: 'Mutation'
  createBoard: Board
  updateBoard?: Board | null
  upsertBoard: Board
  deleteBoard?: Board | null
  deleteManyBoards: BatchPayload
  createPost: Post
  updatePost?: Post | null
  updateManyPosts: BatchPayload
  upsertPost: Post
  deletePost?: Post | null
  deleteManyPosts: BatchPayload
  createThread: Thread
  updateThread?: Thread | null
  updateManyThreads: BatchPayload
  upsertThread: Thread
  deleteThread?: Thread | null
  deleteManyThreads: BatchPayload
  createUser: User
  updateUser?: User | null
  updateManyUsers: BatchPayload
  upsertUser: User
  deleteUser?: User | null
  deleteManyUsers: BatchPayload
}

export interface PageInfo {
  __typename: 'PageInfo'
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor?: string | null
  endCursor?: string | null
}

export interface Post {
  __typename: 'Post'
  id: string
  author: User
  content?: string | null
  createdAt: string
  published: boolean
  title: string
  updatedAt: string
}

export interface PostConnection {
  __typename: 'PostConnection'
  pageInfo: PageInfo
  edges: Array<PostEdge | null>
  aggregate: AggregatePost
}

export interface PostEdge {
  __typename: 'PostEdge'
  node: Post
  cursor: string
}

export interface PostPreviousValues {
  __typename: 'PostPreviousValues'
  id: string
  content?: string | null
  createdAt: string
  published: boolean
  title: string
  updatedAt: string
}

export interface PostSubscriptionPayload {
  __typename: 'PostSubscriptionPayload'
  mutation: MutationType
  node?: Post | null
  updatedFields?: string[] | null
  previousValues?: PostPreviousValues | null
}

export interface Query {
  __typename: 'Query'
  board?: Board | null
  boards: Array<Board | null>
  boardsConnection: BoardConnection
  post?: Post | null
  posts: Array<Post | null>
  postsConnection: PostConnection
  thread?: Thread | null
  threads: Array<Thread | null>
  threadsConnection: ThreadConnection
  user?: User | null
  users: Array<User | null>
  usersConnection: UserConnection
  node?: Node | null
}

export interface Subscription {
  __typename: 'Subscription'
  board?: BoardSubscriptionPayload | null
  post?: PostSubscriptionPayload | null
  thread?: ThreadSubscriptionPayload | null
  user?: UserSubscriptionPayload | null
}

export interface Thread {
  __typename: 'Thread'
  id: string
  createdAt: string
  author: User
  name: string
  entry: Post
  replies?: Post[] | null
}

export interface ThreadConnection {
  __typename: 'ThreadConnection'
  pageInfo: PageInfo
  edges: Array<ThreadEdge | null>
  aggregate: AggregateThread
}

export interface ThreadEdge {
  __typename: 'ThreadEdge'
  node: Thread
  cursor: string
}

export interface ThreadPreviousValues {
  __typename: 'ThreadPreviousValues'
  id: string
  createdAt: string
  name: string
}

export interface ThreadSubscriptionPayload {
  __typename: 'ThreadSubscriptionPayload'
  mutation: MutationType
  node?: Thread | null
  updatedFields?: string[] | null
  previousValues?: ThreadPreviousValues | null
}

export interface User {
  __typename: 'User'
  id: string
  nationality?: string | null
  email: string
  name?: string | null
  posts?: Post[] | null
}

export interface UserConnection {
  __typename: 'UserConnection'
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

export interface UserEdge {
  __typename: 'UserEdge'
  node: User
  cursor: string
}

export interface UserPreviousValues {
  __typename: 'UserPreviousValues'
  id: string
  nationality?: string | null
  email: string
  name?: string | null
}

export interface UserSubscriptionPayload {
  __typename: 'UserSubscriptionPayload'
  mutation: MutationType
  node?: User | null
  updatedFields?: string[] | null
  previousValues?: UserPreviousValues | null
}



/*
 *
 * InputObjectTypeDefinition Typings
 *
 */

export interface BoardCreateInput {
  admins?: UserCreateManyInput | null
  members?: UserCreateManyInput | null
  threads?: ThreadCreateManyInput | null
}

export interface BoardSubscriptionWhereInput {
  mutation_in?: MutationType[] | null
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[] | null
  updatedFields_contains_some?: string[] | null
  node?: BoardWhereInput | null
  AND?: BoardSubscriptionWhereInput[] | null
  OR?: BoardSubscriptionWhereInput[] | null
  NOT?: BoardSubscriptionWhereInput[] | null
}

export interface BoardUpdateInput {
  admins?: UserUpdateManyInput | null
  members?: UserUpdateManyInput | null
  threads?: ThreadUpdateManyInput | null
}

export interface BoardWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[] | null
  createdAt_not_in?: string[] | null
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  admins_every?: UserWhereInput | null
  admins_some?: UserWhereInput | null
  admins_none?: UserWhereInput | null
  members_every?: UserWhereInput | null
  members_some?: UserWhereInput | null
  members_none?: UserWhereInput | null
  threads_every?: ThreadWhereInput | null
  threads_some?: ThreadWhereInput | null
  threads_none?: ThreadWhereInput | null
  AND?: BoardWhereInput[] | null
  OR?: BoardWhereInput[] | null
  NOT?: BoardWhereInput[] | null
}

export interface BoardWhereUniqueInput {
  id?: string | null
}

export interface PostCreateInput {
  author: UserCreateOneWithoutPostsInput
  content?: string | null
  published: boolean
  title: string
}

export interface PostCreateManyInput {
  create?: PostCreateInput[] | null
  connect?: PostWhereUniqueInput[] | null
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | null
  connect?: PostWhereUniqueInput[] | null
}

export interface PostCreateOneInput {
  create?: PostCreateInput | null
  connect?: PostWhereUniqueInput | null
}

export interface PostCreateWithoutAuthorInput {
  content?: string | null
  published: boolean
  title: string
}

export interface PostScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  content?: string | null
  content_not?: string | null
  content_in?: string[] | null
  content_not_in?: string[] | null
  content_lt?: string | null
  content_lte?: string | null
  content_gt?: string | null
  content_gte?: string | null
  content_contains?: string | null
  content_not_contains?: string | null
  content_starts_with?: string | null
  content_not_starts_with?: string | null
  content_ends_with?: string | null
  content_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[] | null
  createdAt_not_in?: string[] | null
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  published?: boolean | null
  published_not?: boolean | null
  title?: string | null
  title_not?: string | null
  title_in?: string[] | null
  title_not_in?: string[] | null
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[] | null
  updatedAt_not_in?: string[] | null
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  AND?: PostScalarWhereInput[] | null
  OR?: PostScalarWhereInput[] | null
  NOT?: PostScalarWhereInput[] | null
}

export interface PostSubscriptionWhereInput {
  mutation_in?: MutationType[] | null
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[] | null
  updatedFields_contains_some?: string[] | null
  node?: PostWhereInput | null
  AND?: PostSubscriptionWhereInput[] | null
  OR?: PostSubscriptionWhereInput[] | null
  NOT?: PostSubscriptionWhereInput[] | null
}

export interface PostUpdateDataInput {
  author?: UserUpdateOneRequiredWithoutPostsInput | null
  content?: string | null
  published?: boolean | null
  title?: string | null
}

export interface PostUpdateInput {
  author?: UserUpdateOneRequiredWithoutPostsInput | null
  content?: string | null
  published?: boolean | null
  title?: string | null
}

export interface PostUpdateManyDataInput {
  content?: string | null
  published?: boolean | null
  title?: string | null
}

export interface PostUpdateManyInput {
  create?: PostCreateInput[] | null
  update?: PostUpdateWithWhereUniqueNestedInput[] | null
  upsert?: PostUpsertWithWhereUniqueNestedInput[] | null
  delete?: PostWhereUniqueInput[] | null
  connect?: PostWhereUniqueInput[] | null
  set?: PostWhereUniqueInput[] | null
  disconnect?: PostWhereUniqueInput[] | null
  deleteMany?: PostScalarWhereInput[] | null
  updateMany?: PostUpdateManyWithWhereNestedInput[] | null
}

export interface PostUpdateManyMutationInput {
  content?: string | null
  published?: boolean | null
  title?: string | null
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | null
  delete?: PostWhereUniqueInput[] | null
  connect?: PostWhereUniqueInput[] | null
  set?: PostWhereUniqueInput[] | null
  disconnect?: PostWhereUniqueInput[] | null
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | null
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | null
  deleteMany?: PostScalarWhereInput[] | null
  updateMany?: PostUpdateManyWithWhereNestedInput[] | null
}

export interface PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput
  data: PostUpdateManyDataInput
}

export interface PostUpdateOneRequiredInput {
  create?: PostCreateInput | null
  update?: PostUpdateDataInput | null
  upsert?: PostUpsertNestedInput | null
  connect?: PostWhereUniqueInput | null
}

export interface PostUpdateWithoutAuthorDataInput {
  content?: string | null
  published?: boolean | null
  title?: string | null
}

export interface PostUpdateWithWhereUniqueNestedInput {
  where: PostWhereUniqueInput
  data: PostUpdateDataInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface PostUpsertNestedInput {
  update: PostUpdateDataInput
  create: PostCreateInput
}

export interface PostUpsertWithWhereUniqueNestedInput {
  where: PostWhereUniqueInput
  update: PostUpdateDataInput
  create: PostCreateInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface PostWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  author?: UserWhereInput | null
  content?: string | null
  content_not?: string | null
  content_in?: string[] | null
  content_not_in?: string[] | null
  content_lt?: string | null
  content_lte?: string | null
  content_gt?: string | null
  content_gte?: string | null
  content_contains?: string | null
  content_not_contains?: string | null
  content_starts_with?: string | null
  content_not_starts_with?: string | null
  content_ends_with?: string | null
  content_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[] | null
  createdAt_not_in?: string[] | null
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  published?: boolean | null
  published_not?: boolean | null
  title?: string | null
  title_not?: string | null
  title_in?: string[] | null
  title_not_in?: string[] | null
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[] | null
  updatedAt_not_in?: string[] | null
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  AND?: PostWhereInput[] | null
  OR?: PostWhereInput[] | null
  NOT?: PostWhereInput[] | null
}

export interface PostWhereUniqueInput {
  id?: string | null
}

export interface ThreadCreateInput {
  author: UserCreateOneInput
  name: string
  entry: PostCreateOneInput
  replies?: PostCreateManyInput | null
}

export interface ThreadCreateManyInput {
  create?: ThreadCreateInput[] | null
  connect?: ThreadWhereUniqueInput[] | null
}

export interface ThreadScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[] | null
  createdAt_not_in?: string[] | null
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND?: ThreadScalarWhereInput[] | null
  OR?: ThreadScalarWhereInput[] | null
  NOT?: ThreadScalarWhereInput[] | null
}

export interface ThreadSubscriptionWhereInput {
  mutation_in?: MutationType[] | null
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[] | null
  updatedFields_contains_some?: string[] | null
  node?: ThreadWhereInput | null
  AND?: ThreadSubscriptionWhereInput[] | null
  OR?: ThreadSubscriptionWhereInput[] | null
  NOT?: ThreadSubscriptionWhereInput[] | null
}

export interface ThreadUpdateDataInput {
  author?: UserUpdateOneRequiredInput | null
  name?: string | null
  entry?: PostUpdateOneRequiredInput | null
  replies?: PostUpdateManyInput | null
}

export interface ThreadUpdateInput {
  author?: UserUpdateOneRequiredInput | null
  name?: string | null
  entry?: PostUpdateOneRequiredInput | null
  replies?: PostUpdateManyInput | null
}

export interface ThreadUpdateManyDataInput {
  name?: string | null
}

export interface ThreadUpdateManyInput {
  create?: ThreadCreateInput[] | null
  update?: ThreadUpdateWithWhereUniqueNestedInput[] | null
  upsert?: ThreadUpsertWithWhereUniqueNestedInput[] | null
  delete?: ThreadWhereUniqueInput[] | null
  connect?: ThreadWhereUniqueInput[] | null
  set?: ThreadWhereUniqueInput[] | null
  disconnect?: ThreadWhereUniqueInput[] | null
  deleteMany?: ThreadScalarWhereInput[] | null
  updateMany?: ThreadUpdateManyWithWhereNestedInput[] | null
}

export interface ThreadUpdateManyMutationInput {
  name?: string | null
}

export interface ThreadUpdateManyWithWhereNestedInput {
  where: ThreadScalarWhereInput
  data: ThreadUpdateManyDataInput
}

export interface ThreadUpdateWithWhereUniqueNestedInput {
  where: ThreadWhereUniqueInput
  data: ThreadUpdateDataInput
}

export interface ThreadUpsertWithWhereUniqueNestedInput {
  where: ThreadWhereUniqueInput
  update: ThreadUpdateDataInput
  create: ThreadCreateInput
}

export interface ThreadWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[] | null
  createdAt_not_in?: string[] | null
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  author?: UserWhereInput | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  entry?: PostWhereInput | null
  replies_every?: PostWhereInput | null
  replies_some?: PostWhereInput | null
  replies_none?: PostWhereInput | null
  AND?: ThreadWhereInput[] | null
  OR?: ThreadWhereInput[] | null
  NOT?: ThreadWhereInput[] | null
}

export interface ThreadWhereUniqueInput {
  id?: string | null
}

export interface UserCreateInput {
  nationality?: string | null
  email: string
  name?: string | null
  posts?: PostCreateManyWithoutAuthorInput | null
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | null
  connect?: UserWhereUniqueInput[] | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutPostsInput {
  nationality?: string | null
  email: string
  name?: string | null
}

export interface UserScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  nationality?: string | null
  nationality_not?: string | null
  nationality_in?: string[] | null
  nationality_not_in?: string[] | null
  nationality_lt?: string | null
  nationality_lte?: string | null
  nationality_gt?: string | null
  nationality_gte?: string | null
  nationality_contains?: string | null
  nationality_not_contains?: string | null
  nationality_starts_with?: string | null
  nationality_not_starts_with?: string | null
  nationality_ends_with?: string | null
  nationality_not_ends_with?: string | null
  email?: string | null
  email_not?: string | null
  email_in?: string[] | null
  email_not_in?: string[] | null
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND?: UserScalarWhereInput[] | null
  OR?: UserScalarWhereInput[] | null
  NOT?: UserScalarWhereInput[] | null
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | null
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[] | null
  updatedFields_contains_some?: string[] | null
  node?: UserWhereInput | null
  AND?: UserSubscriptionWhereInput[] | null
  OR?: UserSubscriptionWhereInput[] | null
  NOT?: UserSubscriptionWhereInput[] | null
}

export interface UserUpdateDataInput {
  nationality?: string | null
  email?: string | null
  name?: string | null
  posts?: PostUpdateManyWithoutAuthorInput | null
}

export interface UserUpdateInput {
  nationality?: string | null
  email?: string | null
  name?: string | null
  posts?: PostUpdateManyWithoutAuthorInput | null
}

export interface UserUpdateManyDataInput {
  nationality?: string | null
  email?: string | null
  name?: string | null
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | null
  update?: UserUpdateWithWhereUniqueNestedInput[] | null
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | null
  delete?: UserWhereUniqueInput[] | null
  connect?: UserWhereUniqueInput[] | null
  set?: UserWhereUniqueInput[] | null
  disconnect?: UserWhereUniqueInput[] | null
  deleteMany?: UserScalarWhereInput[] | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | null
}

export interface UserUpdateManyMutationInput {
  nationality?: string | null
  email?: string | null
  name?: string | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserCreateWithoutPostsInput | null
  update?: UserUpdateWithoutPostsDataInput | null
  upsert?: UserUpsertWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateWithoutPostsDataInput {
  nationality?: string | null
  email?: string | null
  name?: string | null
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  nationality?: string | null
  nationality_not?: string | null
  nationality_in?: string[] | null
  nationality_not_in?: string[] | null
  nationality_lt?: string | null
  nationality_lte?: string | null
  nationality_gt?: string | null
  nationality_gte?: string | null
  nationality_contains?: string | null
  nationality_not_contains?: string | null
  nationality_starts_with?: string | null
  nationality_not_starts_with?: string | null
  nationality_ends_with?: string | null
  nationality_not_ends_with?: string | null
  email?: string | null
  email_not?: string | null
  email_in?: string[] | null
  email_not_in?: string[] | null
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  posts_every?: PostWhereInput | null
  posts_some?: PostWhereInput | null
  posts_none?: PostWhereInput | null
  AND?: UserWhereInput[] | null
  OR?: UserWhereInput[] | null
  NOT?: UserWhereInput[] | null
}

export interface UserWhereUniqueInput {
  id?: string | null
}



/*
 *
 * EnumTypeDefinition Typings
 *
 */

export interface BoardOrderByInput {
  id_ASC: 'id_ASC'
  id_DESC: 'id_DESC'
  createdAt_ASC: 'createdAt_ASC'
  createdAt_DESC: 'createdAt_DESC'
  updatedAt_ASC: 'updatedAt_ASC'
  updatedAt_DESC: 'updatedAt_DESC'
}

export const BoardOrderByInput: BoardOrderByInput = {
  id_ASC: 'id_ASC',
  id_DESC: 'id_DESC',
  createdAt_ASC: 'createdAt_ASC',
  createdAt_DESC: 'createdAt_DESC',
  updatedAt_ASC: 'updatedAt_ASC',
  updatedAt_DESC: 'updatedAt_DESC',
}

export interface MutationType {
  CREATED: 'CREATED'
  UPDATED: 'UPDATED'
  DELETED: 'DELETED'
}

export const MutationType: MutationType = {
  CREATED: 'CREATED',
  UPDATED: 'UPDATED',
  DELETED: 'DELETED',
}

export interface PostOrderByInput {
  id_ASC: 'id_ASC'
  id_DESC: 'id_DESC'
  content_ASC: 'content_ASC'
  content_DESC: 'content_DESC'
  createdAt_ASC: 'createdAt_ASC'
  createdAt_DESC: 'createdAt_DESC'
  published_ASC: 'published_ASC'
  published_DESC: 'published_DESC'
  title_ASC: 'title_ASC'
  title_DESC: 'title_DESC'
  updatedAt_ASC: 'updatedAt_ASC'
  updatedAt_DESC: 'updatedAt_DESC'
}

export const PostOrderByInput: PostOrderByInput = {
  id_ASC: 'id_ASC',
  id_DESC: 'id_DESC',
  content_ASC: 'content_ASC',
  content_DESC: 'content_DESC',
  createdAt_ASC: 'createdAt_ASC',
  createdAt_DESC: 'createdAt_DESC',
  published_ASC: 'published_ASC',
  published_DESC: 'published_DESC',
  title_ASC: 'title_ASC',
  title_DESC: 'title_DESC',
  updatedAt_ASC: 'updatedAt_ASC',
  updatedAt_DESC: 'updatedAt_DESC',
}

export interface ThreadOrderByInput {
  id_ASC: 'id_ASC'
  id_DESC: 'id_DESC'
  createdAt_ASC: 'createdAt_ASC'
  createdAt_DESC: 'createdAt_DESC'
  name_ASC: 'name_ASC'
  name_DESC: 'name_DESC'
  updatedAt_ASC: 'updatedAt_ASC'
  updatedAt_DESC: 'updatedAt_DESC'
}

export const ThreadOrderByInput: ThreadOrderByInput = {
  id_ASC: 'id_ASC',
  id_DESC: 'id_DESC',
  createdAt_ASC: 'createdAt_ASC',
  createdAt_DESC: 'createdAt_DESC',
  name_ASC: 'name_ASC',
  name_DESC: 'name_DESC',
  updatedAt_ASC: 'updatedAt_ASC',
  updatedAt_DESC: 'updatedAt_DESC',
}

export interface UserOrderByInput {
  id_ASC: 'id_ASC'
  id_DESC: 'id_DESC'
  nationality_ASC: 'nationality_ASC'
  nationality_DESC: 'nationality_DESC'
  email_ASC: 'email_ASC'
  email_DESC: 'email_DESC'
  name_ASC: 'name_ASC'
  name_DESC: 'name_DESC'
  createdAt_ASC: 'createdAt_ASC'
  createdAt_DESC: 'createdAt_DESC'
  updatedAt_ASC: 'updatedAt_ASC'
  updatedAt_DESC: 'updatedAt_DESC'
}

export const UserOrderByInput: UserOrderByInput = {
  id_ASC: 'id_ASC',
  id_DESC: 'id_DESC',
  nationality_ASC: 'nationality_ASC',
  nationality_DESC: 'nationality_DESC',
  email_ASC: 'email_ASC',
  email_DESC: 'email_DESC',
  name_ASC: 'name_ASC',
  name_DESC: 'name_DESC',
  createdAt_ASC: 'createdAt_ASC',
  createdAt_DESC: 'createdAt_DESC',
  updatedAt_ASC: 'updatedAt_ASC',
  updatedAt_DESC: 'updatedAt_DESC',
}



