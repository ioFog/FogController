/*
 *  *******************************************************************************
 *  * Copyright (c) 2018 Edgeworx, Inc.
 *  *
 *  * This program and the accompanying materials are made available under the
 *  * terms of the Eclipse Public License v. 2.0 which is available at
 *  * http://www.eclipse.org/legal/epl-2.0
 *  *
 *  * SPDX-License-Identifier: EPL-2.0
 *  *******************************************************************************
 *
 */

class AuthenticationError extends Error {
  constructor(message) {
    super(message)
    this.message = message
    this.name = 'AuthenticationError'
  }
}

class TransactionError extends Error {
  constructor() {
    const message = 'Transaction not provided';
    super(message);
    this.message = message;
    this.name = 'TransactionError'
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = "ValidationError";
  }
}

class InvalidCredentialsError extends Error {
  constructor() {
    const message = 'Invalid credentials';
    super(message);
    this.message = message;
    this.name = "InvalidCredentialsError";
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = "NotFoundError";
  }
}

module.exports = {
  AuthenticationError: AuthenticationError,
  TransactionError: TransactionError,
  ValidationError: ValidationError,
  InvalidCredentialsError: InvalidCredentialsError,
  NotFoundError: NotFoundError
};