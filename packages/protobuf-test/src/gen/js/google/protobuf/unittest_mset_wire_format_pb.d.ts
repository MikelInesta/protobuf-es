// Copyright 2021-2023 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Author: kenton@google.com (Kenton Varda)
//  Based on original Protocol Buffers design by
//  Sanjay Ghemawat, Jeff Dean, and others.
//
// This file contains messages for testing message_set_wire_format.

// @generated by protoc-gen-es v1.5.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_mset_wire_format.proto (package proto2_wireformat_unittest, syntax proto2)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";

/**
 * A message with message_set_wire_format.
 *
 * @generated from message proto2_wireformat_unittest.TestMessageSet
 */
export declare class TestMessageSet extends Message<TestMessageSet> {
  constructor(data?: PartialMessage<TestMessageSet>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "proto2_wireformat_unittest.TestMessageSet";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestMessageSet;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestMessageSet;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestMessageSet;

  static equals(a: TestMessageSet | PlainMessage<TestMessageSet> | undefined, b: TestMessageSet | PlainMessage<TestMessageSet> | undefined): boolean;
}

/**
 * @generated from message proto2_wireformat_unittest.TestMessageSetWireFormatContainer
 */
export declare class TestMessageSetWireFormatContainer extends Message<TestMessageSetWireFormatContainer> {
  /**
   * @generated from field: optional proto2_wireformat_unittest.TestMessageSet message_set = 1;
   */
  messageSet?: TestMessageSet;

  constructor(data?: PartialMessage<TestMessageSetWireFormatContainer>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "proto2_wireformat_unittest.TestMessageSetWireFormatContainer";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestMessageSetWireFormatContainer;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestMessageSetWireFormatContainer;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestMessageSetWireFormatContainer;

  static equals(a: TestMessageSetWireFormatContainer | PlainMessage<TestMessageSetWireFormatContainer> | undefined, b: TestMessageSetWireFormatContainer | PlainMessage<TestMessageSetWireFormatContainer> | undefined): boolean;
}

